---
created: 2026-08-29 17:54:15
tags: [engram, bugfix]
engram_id: 3300
type: bugfix
---

# Gates locales completamente verdes

**What**: Se corrigió la regresión del LRU de response-cache y se completó la verificación local principal.
**Why**: El runner raíz tenía 1 fallo que impedía declarar el stack estable.
**Where**: `src/resilience/response-cache/sqlite.ts`, `tests/unit/response-cache-telemetry.test.ts`.
**Learned**: El fallo combinaba aislamiento deficiente por SQLite compartido y precisión de `datetime('now')` en segundos; usar precisión de milisegundos y quitar espera artificial hizo el test determinista. Ahora `npm test` 5/5, typecheck, lint y diff-check pasan.

---
*Imported from Engram on 2026-09-06*
