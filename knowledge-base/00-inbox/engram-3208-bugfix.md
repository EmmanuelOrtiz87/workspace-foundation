---
created: 2026-08-28 12:23:14
tags: [engram, bugfix]
engram_id: 3208
type: bugfix
---

# Bitbucket 401 root cause + vault path fix + UI mejoras (P3)

**What**: Resolví el 401 persistente de Bitbucket Cloud en gv-analytics y completé mejoras de UI del plan P3.
**Why**: El 401 no era del método de auth (Basic email:token es correcto para los nuevos API tokens de Bitbucket, verificado en docs oficiales de Atlassian) sino porque el campo `bitbucketApiToken` del vault contenía la URL `https://dtvott.atlassian.net/` en vez de un token real.
**Where**: apps/gv-analytics/server/atlassian.ts, apps/gv-analytics/server/vault.ts, apps/gv-analytics/src/App.tsx, apps/gv-analytics/src/i18n.tsx, apps/gv-analytics/src/styles.css
**Learned**: (1) Bitbucket Cloud moderno reemplazó App Passwords por API tokens con scope; se autentican con Basic `email:token` o Bearer. (2) Bug latente del vault: `vault.ts` usaba `resolve(process.cwd(), '../..')` que sube a `C:\` cuando el server corre desde la raíz del repo; lo corregí a `fileURLToPath(import.meta.url)` (determinista). (3) Agregué validación `isUrlLike` que rechaza tokens que sean URLs. (4) UI: formato `campo: valor` en conexión, oculté recuadro OAuth 2.0 (decisión usuario), columna Export en historial (refactor exportReport para aceptar id), filtro "Todos los modos" (bug i18n "Modo — Modo"). Commit c026c089.

---
*Imported from Engram on 2026-09-06*
