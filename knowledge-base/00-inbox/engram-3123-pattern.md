---
created: 2026-08-25 13:16:21
tags: [engram, pattern]
engram_id: 3123
type: pattern
---

# Build-time design tokens and CI graph analysis

**What**: Completadas optimizaciones adicionales del plan. Design tokens ahora tienen salida CSS explícita (`--output`) y se generan automáticamente en `prebuild` del dashboard, importándose desde `apps/web-dashboard/src/styles/index.css`; no se añadió style-dictionary porque el pipeline nativo ya cubre la necesidad. CI recibió job `graphify-affected` para construir el grafo y analizar archivos TS/TSX/JS/JSX modificados en PRs. Se confirmó que `actions/setup-node cache: pnpm` ya cubre el store usado por pnpm/dlx/tsx. Lefthook pre-push ya incluye content:validate y ci:static-gates. SessionOrchestrator FSM ya creado y verificado.

**Why**: Continuar todas las optimizaciones pendientes tras cerrar P1.

**Where**: src/design/design-system-cli.ts, apps/web-dashboard/package.json, apps/web-dashboard/src/styles/index.css, apps/web-dashboard/src/styles/generated-tokens.css, .github/workflows/ci.yml, .lefthook.yml, src/core/session-orchestrator.ts, docs/plans/NEXT-SESSION-PLAN-2026-08-25.md

**Learned**: Verificación: dashboard build 16.17s verde, root typecheck/lint verdes, tests workflows 4/4, `lint:workflows .github/workflows/ci.yml` OK, `git diff --check` OK. El CLI graphify ya soporta `affected`; el grafo local aún no contiene archivos nuevos hasta ejecutar build/update. El check `design:check` requiere archivo o `--fg/--bg`; su mensaje de uso sin args es esperado.

---
*Imported from Engram on 2026-09-06*
