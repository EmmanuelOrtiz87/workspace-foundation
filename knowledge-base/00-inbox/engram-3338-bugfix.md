---
created: 2026-08-29 21:23:47
tags: [engram, bugfix]
engram_id: 3338
type: bugfix
---

# TS-only y recuperación de tokens del Dashboard

**What**: Se completó la auditoría TS-only/CMD-first y se restauró la métrica de consumo/costo de tokens en Dashboard.
**Why**: El usuario pidió eliminar PS1 y PowerShell como dependencia, y detectar por qué Dashboard dejó de mostrar gastos/consumo.
**Where**: `src/content-operations/export-kit.ts`, `src/web/witr-installer.ts`, `src/cli/presentations-maintenance.ts`, `src/tools/setup-branch-protection.ts`, tests/workflows; `apps/web-dashboard/server/database/metrics-writer.ts`, `apps/web-dashboard/server/real-data/metrics.ts`, `tests/unit/metrics-writer-token-fallback.test.ts`.
**Learned**: Los PS1 activos sí tenían contraparte TS salvo deploy-presentations, que quedó reemplazado por GitHub Pages/documentación; no quedan PS1 físicos activos. El error VBS se resolvió usando node directo con quoting válido. El Dashboard perdió tokens por comparar timestamps SQLite con ISO y consultar solo tokens sin costo; ahora usa `datetime()`, filtra tenant y hace fallback a `token_usage` con tokens+costo. Verificación: `/api/metrics` ~7.2M tokens/$3.09, `/api/token-usage` 20 filas y dashboard tests 61/61.

---
*Imported from Engram on 2026-09-06*
