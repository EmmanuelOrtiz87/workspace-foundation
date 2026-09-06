---
created: 2026-08-28 11:54:15
tags: [engram, bugfix]
engram_id: 3207
type: bugfix
---

# gv-analytics: test sin persistir + prefill edición + token Bitbucket era URL

**What**: Mejoras de UX/seguridad en gv-analytics (commit 9e8aeca6) + diagnóstico del 401 de Bitbucket.
**Why**: El usuario reportó (a) pérdida de datos al editar, (b) duda sobre persistir al "Probar" sin "Guardar", (c) campos obligatorios sin marcar, (d) 401 persistente de Bitbucket.
**Where**: apps/gv-analytics/{server/atlassian.ts, server/index.ts, src/types.ts, src/App.tsx, src/i18n.tsx, src/styles.css}
**Learned**:
- "Probar" ahora usa `POST /api/connection/test` (testConnectionForm) que valida credenciales SIN persistir. Solo "Guardar y probar" (configureConnection) persiste. Respuesta a la duda de seguridad: NO persistir al probar.
- "Editar" precarga siteUrl/email/workspace desde status y muestra tokens enmascarados (`apiTokenMasked`/`bitbucketApiTokenMasked` = `••••1234`). `buildConnection` mantiene el token existente si el campo queda vacío (no lo borra).
- Campos obligatorios marcados con `*` (siteUrl, email, apiToken).
- **Diagnóstico 401 Bitbucket**: el campo "API token de Bitbucket" contenía `https://dtvott.atlassian.net/` — una URL, no un App Password. Bitbucket Cloud NO acepta API tokens de Atlassian (ni con scope "app bitbucket"); requiere App Password (Basic auth email:app_password). El usuario pegó la URL del sitio en el campo del token.
- GOTCHA: el vault se guarda en `C:\.runtime\gv-analytics\` (no en el repo) por `ROOT = resolve(process.cwd(), '../..')` = `C:\` cuando el server corre desde la raíz. Bug latente de path pendiente de corregir.
- GOTCHA de proceso: los daemons detached no se reinician al cambiar código; hay que reiniciar el server para que tome cambios de backend.

---
*Imported from Engram on 2026-09-06*
