---
created: 2026-08-25 15:17:19
tags: [engram, decision]
engram_id: 3160
type: decision
---

# Higiene organizacional + 6 commits locales (push pendiente)

**What**: Higiene organizacional pre-push completada y todo el trabajo versionado en 6 commits locales en main (cf780d49 dashboard RBAC/cache/OTel/provenance, bdf85755 routing loop, 28116b5a infra gates/config-loader/session-orchestrator, d797eddd core tokens/circuit-breaker/watchtower, 64dbc8c1 docs local-first, 95712436 chore higiene). Working tree limpio; verificación final: typecheck/lint limpios, 463 unit + 24 config + 4 workflow tests 0 fail, watchtower 97/97 PASS 0 WARN, graphify actualizado (4.644 nodos).
**Why**: El usuario pidió revisar organización/refs/readmes antes de subir todo y avanzar con lo pendiente.
**Where**: raíz del repo, docs/, config/, scripts/debug/, reports/, GENTLE_VANGUARD_MASTER/07-REPO_INTEGRATION
**Learned**: Eliminados dirs basura de shell (--label/, -Mode/, session/) y auto-launcher.ts (roto); consolidado legacy-foundation; 16 READMEs nuevos en docs/*; governance config remapeado a docs vivos; sync manifest depurado 48→32 assets v3.8.2; MASTER actualizado preservando histórico. GOTCHA: hook pre-commit opencode-validation valida configs contra schema usando contenido STAGED (git add antes de reintentar); schemas con additionalProperties:false deben declarar properties.$schema. Push pendiente de confirmación (SDD gate en PRs a main).

---
*Imported from Engram on 2026-09-06*
