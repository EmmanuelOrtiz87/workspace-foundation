---
created: 2026-08-09 22:00:11
tags: [engram, architecture]
engram_id: 2715
type: architecture
---

# Fase 1 Consolidación de madurez del stack

**What**: Implementé la Fase 1 de consolidación de madurez: registry de módulos core vs experimental + gates de gobernanza + workflow de activación.
**Why**: ROADMAP.md (docs/product/ROADMAP.md) tenía 7 acciones pendientes de "Fase 1 — Consolidación corta": definir core vs experimental, opt-in, validación de config, ruta de maduración, política de activación, gates, workflow formal.
**Where**:
- config/module-maturity.json — 24 módulos: 14 core, 8 experimental (opt-in, activated:false), 2 deprecated. Cada uno con id/name/category/maturity/optIn/activated/risk/owner/script/description/activationCriteria.
- src/module-maturity.ts — CLI+API: list | --status | --validate <id> | --gate <id> [--run-checks]. Evaluación de criterios: tests/typecheck/lint/security-scan (npm script presence o ejecución con --run-checks), governance-approval (archivo en docs/governance/activation-decisions/<id>.md), owner-signoff.
- docs/governance/MODULE-ACTIVATION-WORKFLOW.md — proceso propuesta→revisión gov→gates mínimos→aprobación→activación/rollout.
- docs/governance/activation-decisions/ — template de decisión (_TEMPLATE.md).
- docs/product/ROADMAP.md — 7 acciones marcadas ✅ Done.
- config/session-autostart.config.json — step lazy `module-maturity-validate` agregado (--status).
**Learned**: typecheck+lint pasan (0 errores). `--validate <core>` pasa (core auto-active); `--validate <experimental>` muestra criterios faltantes (governance-approval + owner-signoff). `npx tsx src/module-maturity.ts` funciona. Gotcha: duplicar export de loadModuleConfig (export inline + en export list) rompe tsx/esbuild — quitar de la lista final. Patrón ESM: imports con .js, CLI guard `if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)`.

---
*Imported from Engram on 2026-09-06*
