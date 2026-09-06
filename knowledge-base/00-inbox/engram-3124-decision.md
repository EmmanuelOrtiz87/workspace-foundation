---
created: 2026-08-25 13:18:48
tags: [engram, decision]
engram_id: 3124
type: decision
---

# Optimization backlog completed and P2 blockers verified

**What**: Completadas las optimizaciones restantes del plan: design tokens build-time nativos (sin style-dictionary), análisis graphify affected en CI, cobertura de cache pnpm para tsx/dlx documentada, y sincronización de estado P0/P2. El dashboard prebuild genera `src/styles/generated-tokens.css` desde config/design-tokens.json y lo importa en index.css. CI añade job graphify-affected para PRs. El plan ahora refleja RBAC v1 completo y 97 checks del watchtower.

**Why**: Avanzar con todo lo pendiente sin inventar inputs externos.

**Where**: src/design/design-system-cli.ts, apps/web-dashboard/package.json, apps/web-dashboard/src/styles/index.css, apps/web-dashboard/src/styles/generated-tokens.css, .github/workflows/ci.yml, docs/plans/NEXT-SESSION-PLAN-2026-08-25.md

**Learned**: `actions/setup-node` con `cache: pnpm` ya cubre el store para pnpm/dlx/tsx; no conviene cachear una ruta artificial. `graphify affected` existe y acepta archivo/id, pero el grafo local necesita build/update para incluir archivos nuevos. P2 queda bloqueado legítimamente por inputs del operador: digests de imágenes, GV_K8S_CNI_PROVIDER, GV_K8S_NETWORKPOLICY_ENFORCED, manifiesto NetworkPolicy y GV_MCP_SANDBOX_*; `validate:deployment --report` lo confirma. Suites finales: config 24/24, workflows 4/4, dashboard 57/57; typecheck/lint/build previos verdes.

---
*Imported from Engram on 2026-09-06*
