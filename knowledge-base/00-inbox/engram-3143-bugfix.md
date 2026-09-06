---
created: 2026-08-25 13:42:14
tags: [engram, bugfix]
engram_id: 3143
type: bugfix
---

# Watchtower health probe auth fix

**What**: Cambié el probe HTTP de Dashboard WS en `src/core/maintenance-watchtower.ts` de `/api/metrics` a `/api/health` y añadí `tests/unit/maintenance-watchtower.test.ts`.
**Why**: `/api/metrics` requiere autenticación y causaba un warning falso con 401 aunque el dashboard estuviera sano.
**Where**: `src/core/maintenance-watchtower.ts`, `tests/unit/maintenance-watchtower.test.ts`.
**Learned**: Se conserva el criterio estricto: `testHttp` solo acepta respuestas HTTP 200; no se tocaron procesos runtime. El archivo watchtower ya tenía cambios no relacionados en el worktree y un warning de formato preexistente.

---
*Imported from Engram on 2026-09-06*
