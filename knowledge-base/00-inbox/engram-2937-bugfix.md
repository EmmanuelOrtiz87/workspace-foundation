---
created: 2026-08-21 03:27:22
tags: [engram, bugfix]
engram_id: 2937
type: bugfix
---

# CI público: runtime dependency

**What**: Corregí el siguiente fallo técnico de CI público publicando `src/core/run-command.ts` y anotando callbacks implícitos en `src/performance-slo-monitor.ts`.
**Why**: GitHub Actions fallaba en postinstall TypeScript por módulos runtime ausentes en la distribución pública, no por crédito.
**Where**: src/sync-to-public.ts, src/core/run-command.ts, src/performance-slo-monitor.ts; público commit c2fe16a; privado main/develop f960e24d.
**Learned**: El público ya puede ejecutar `pnpm tsc --noEmit` localmente tras `pnpm install --ignore-scripts`; el run CI siguiente debe confirmar el postinstall real. La estrategia de sync parcial exige revisar todas las dependencias transitivas de cada helper publicado.

---
*Imported from Engram on 2026-09-06*
