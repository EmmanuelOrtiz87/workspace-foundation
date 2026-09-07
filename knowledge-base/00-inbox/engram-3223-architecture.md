---
created: 2026-08-29 04:19:15
tags: [engram, architecture]
engram_id: 3223
type: architecture
---

# F2.2 COMPLETO — reorganización src/ en dominios

**What**: F2.2 (reorganización de src/ raíz en dominios) está COMPLETO: 13/13 dominios, 259/259 archivos movidos. Commits finales: 459a49d4 (misc 27), 2a5d9e8b (fix hooks codegraph), 6fcba28a (survey 259/259), 75c85f33 (fix import deployment-tenant-context en websocket-server), 927ccac9 (fix launcher detached), 69ca1e93 (docs refs), 31aa4168 (runtime sync).
**Why**: El plan STACK-EVOLUTION-PLAN-2026 pedía mover todos los archivos de src/ raíz a subdirectorios por dominio (sdd, security, ml, session, orchestration, ops, review, infrastructure, monitor, knowledge, integrations, resilience, tools, misc).
**Where**: src/ (259 archivos), docs/plans/F2.2-SURVEY.md, .lefthook.yml, apps/web-dashboard/server/websocket-server.ts
**Learned**: (1) El barrido F2.2 NO cubrió apps/ — hubo que fixear apps/web-dashboard/server/websocket-server.ts manualmente (importaba ../../../src/deployment-tenant-context.ts). (2) Los tests unitarios NO cubren todos los CLIs (version-sync, stack-compliance, coverage-runner, siem-audit-bridge, post-merge-sync, check-version, sia-orchestrator, setup-complete, gateguard-mcp, hashline-snapshot-hook) — auditar path-computation con Grep manual. (3) Patrones walk-up robustos: findRepoRoot (21 impls), skill-recommender, ft-data-collector, eval-runner, eval-quality-gate, ci-rollback-engine, bootstrap.ts, adaptive-common. (4) 12 regresiones de ROOT corregidas a '../..'. (5) Verificación: npx tsc --noEmit EXIT 0, 513/513 unit tests, gga-comprehensive 1/1, graphify 4720 nodos/9134 edges.

---
*Imported from Engram on 2026-09-06*
