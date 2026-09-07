---
created: 2026-08-28 11:33:41
tags: [engram, bugfix]
engram_id: 3206
type: bugfix
---

# gv-analytics: Bitbucket 401 por server stale (token no persistido)

**What**: El usuario cargó el API key de Bitbucket pero seguía con 401. Causa raíz: el server gv-analytics (PID 8340) estaba corriendo código STALE (arrancó 03:19, antes del commit c5022e84 a las 08:14 que agregó `bitbucketApiToken`). Al guardar la conexión, el `configureConnection` viejo DROPEABA el campo `bitbucketApiToken`, así que nunca se persistió. El vault mostraba `has bitbucketApiToken: false` y Bitbucket devolvía "API Token provided has no Bitbucket scopes" (usaba el fallback a `apiToken` de Atlassian).
**Why**: El daemon detached sobrevive a su padre y no se reinicia solo al cambiar el código; el usuario guardó contra el server viejo.
**Where**: apps/gv-analytics/server/{atlassian.ts, vault.ts}
**Learned**:
- Fix: reiniciar el server (`npm run analytics:stop` + matar PID real + `npm run analytics:start:api`). Verificado: nuevo server PID 2084 arrancó 08:31 (post-cambio de código).
- Verifiqué round-trip de persistencia con el módulo vault directamente: `bitbucketApiToken` se guarda y recarga correctamente; restauré el vault original sin pérdida.
- GOTCHA: el vault se guarda en `C:\.runtime\gv-analytics\` (NO en el repo) porque `vault.ts` calcula `ROOT = resolve(process.cwd(), '../..')` = `C:\` cuando el server corre desde la raíz del repo. Bug latente de path (debería ser la raíz del repo, no 2 niveles arriba).
- Bitbucket Cloud NO acepta API tokens de Atlassian; requiere App Password (Basic auth `email:app_password`), que es lo que el código ya usa. El error "no Bitbucket scopes" confirma que se usó el token de Atlassian.
- Acción del usuario: re-guardar la conexión en Configuración con el App Password de Bitbucket ahora que el server corre el código nuevo.

---
*Imported from Engram on 2026-09-06*
