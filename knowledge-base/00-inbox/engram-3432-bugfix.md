---
created: 2026-08-31 03:06:55
tags: [engram, bugfix]
engram_id: 3432
type: bugfix
---

# CI contract and optional cloud test hardening

**What**: Eliminé fallos reales del CI local: los tests de skills apuntaban a `.opencode/skills` (stubs deprecated) en lugar de `skills/` canónico; el test cloud importaba SDKs opcionales de forma estática y tenía una expectativa inconsistente de load/capacity; ahora hace imports opcionales, omite solo pruebas cloud cuando faltan SDKs y corrige los datos de routing. También quedó sincronizado el generador de tool profiles con Prettier y el contrato `/api/metrics` garantiza `tokens`/`operational`.
**Why**: El último CI tenía 17 fallos de skills, fallo de cloud connectors, drift de tool profiles y fallo de `/api/metrics` en tenant scope.
**Where**: `tests/skills/{finance-financial-analyst,hr-talent-acquisition,legal-compliance-officer,marketing-content-writer,sales-account-executive}.test.ts`, `tests/integration/cloud-connectors/cloud-connectors.test.ts`, `src/orchestration/profiles-build.ts`, `apps/web-dashboard/server/ws-hub/metrics.ts`, `tests/integration/api-health.test.js`.
**Learned**: Las capacidades cloud son opt-in; las pruebas deben ser contractuales y degradar limpiamente sin SDK/credenciales. `profiles:build` debe aplicar la configuración raíz de Prettier para que `profiles:check` y `format:check` sean compatibles.

---
*Imported from Engram on 2026-09-06*
