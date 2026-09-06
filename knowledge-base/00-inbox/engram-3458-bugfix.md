---
created: 2026-08-31 04:19:44
tags: [engram, bugfix]
engram_id: 3458
type: bugfix
---

# CI race and coverage fixes published

**What**: Publicado en PR #172 el commit `49dc4520` con circuit breaker v2 dinámico y slots half-open no bloqueantes, fixture portable de process-hygiene y sesión lifecycle que valida fuente canónica MCP. Pre-push 12/12; local coverage 661 tests y delivery gate 9/9.
**Why**: Los runs remotos detectaron carreras en `.runtime` y una dependencia incorrecta de artefactos `dist`.
**Where**: PR https://github.com/EmmanuelOrtiz87/gentle-vanguard/pull/172; `src/resilience/circuit-breaker-v2.ts`, `tests/unit/circuit-breaker-v2.test.ts`, `tests/unit/process-hygiene.test.ts`, `tests/e2e/session-lifecycle.test.ts`.
**Learned**: En CI paralelo los tests no pueden depender de constantes de estado fijadas durante import ni de pidfiles con separadores de Windows; el Production Gate del nuevo run ya pasó, mientras Unit Tests sigue ejecutándose.

---
*Imported from Engram on 2026-09-06*
