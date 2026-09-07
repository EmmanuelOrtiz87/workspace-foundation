---
created: 2026-08-29 21:17:52
tags: [engram, bugfix]
engram_id: 3334
type: bugfix
---

# Dashboard token metrics fallback

**What**: Corregí la pérdida de consumo/costo del Dashboard agregando fallback de `MetricsWriter` a Nexus `token_usage` con `datetime()` SQLite, filtro de tenant y tokens+costo; `getRealMetricsFromDb()` ahora usa el ledger reciente si el snapshot es cero/atrasado. Añadí regresión con DB en memoria.
**Why**: El fallback introducido en `e9151124c` comparaba timestamps SQLite `YYYY-MM-DD HH:MM:SS` contra ISO con `T`, devolviendo cero; además solo recuperaba tokens, no costo. Snapshots cero ocultaban datos reales aunque `/api/token-usage` tenía filas.
**Where**: `apps/web-dashboard/server/database/metrics-writer.ts`, `apps/web-dashboard/server/real-data/metrics.ts`, `tests/unit/metrics-writer-token-fallback.test.ts`.
**Learned**: `/api/metrics` usa snapshots/tenant-scoped; `/api/token-usage` consulta directamente Nexus. Tras reiniciar el dashboard, `/api/metrics` pasó a devolver datos reales (aprox. 7.2M tokens y $3.09), con 20 filas de uso y 11 trazas en 24h. Dashboard build/lint/tests/typecheck pasan.

---
*Imported from Engram on 2026-09-06*
