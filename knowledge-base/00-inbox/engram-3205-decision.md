---
created: 2026-08-28 11:25:39
tags: [engram, decision]
engram_id: 3205
type: decision
---

# gv-analytics: separar credenciales Atlassian + 3 pantallas

**What**: Separé las credenciales de conexión Atlassian (Jira/Confluence comparten un API token; Bitbucket usa un token + workspace separados) y refactoricé gv-analytics a 3 pantallas con tabs (Operación/Configuración/Historial). Commit c5022e84.
**Why**: El usuario pidió separar las credenciales (Bitbucket requiere token distinto) y reordenar las pantallas UI (configuración separada de operación; historial como tabla filtrable tipo Excel). Confirmó el layout de 3 pantallas.
**Where**: apps/gv-analytics/{server/atlassian.ts, server/vault.ts, src/types.ts, src/App.tsx, src/i18n.tsx, src/styles.css}, docs/analytics/PENDING.md
**Learned**:
- Backend: `tokenFor(connection, service)` elige el token por servicio (Bitbucket → `bitbucketApiToken` con fallback a `apiToken` para vaults viejos); `authHeader` ahora recibe `service`; `configureConnection` persiste `bitbucketApiToken` (opcional, backward-compat).
- Frontend: `activeSection` (scroll-spy stepper) → `view: 'operacion'|'configuracion'|'historial'` con tabs. Eliminé el scroll-spy/IntersectionObserver (ya no aplica con tabs).
- `ConfigView` (props tipadas con `React.Dispatch`/`React.FormEvent` — funcionan porque @types/react expone el namespace global React) y `HistoryView` (tabla con búsqueda + filtro por modo, columnas fecha/hora/título/modo/id).
- i18n: añadí claves nuevas en 3 bloques (en/es/pt-BR). GOTCHA: editar claves que existen en múltiples bloques requiere contexto único (p.ej. incluir la línea siguiente) para evitar "multiple matches".
- typecheck + build (tsc && vite build, 1356 módulos) verdes. Sin tests propios en gv-analytics (solo node_modules).

---
*Imported from Engram on 2026-09-06*
