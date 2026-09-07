---
created: 2026-08-25 13:51:37
tags: [engram, architecture]
engram_id: 3152
type: architecture
---

# Routing learning loop y health dashboard

**What**: Se completó el siguiente tramo del plan: Watchtower ahora valida `/api/health` público en vez de `/api/metrics` autenticado; provenance filesystem quedó explícito sin atribuir datos globales a tenants; y el routing learning loop usa Nexus como autoridad con migración `015_routing_outcome_metrics`, `success_count/success_rate`, outcomes tenant-scoped e integración con `route-and-delegate`/`recommend-agent`.
**Why**: El warning del dashboard era falso positivo y faltaba demostrar aprendizaje real de recomendaciones.
**Where**: `src/core/maintenance-watchtower.ts`, `apps/web-dashboard/server/real-data.ts`, `apps/web-dashboard/server/database/repositories/MigrationRunner.ts`, `SkillRepo.ts`, `manager.ts`, `src/route-and-delegate.ts`, `src/recommend-agent.ts`, tests de routing/provenance/health.
**Learned**: Suite completa 5/5 suites, 459/459 tests; Watchtower estable en 97 PASS, 0 WARN, 0 FAIL; typecheck/lint/build/dashboard y graphify pasan. Permanecen solo bloqueos externos de promoción (digests, Cosign, CNI/NetworkPolicy y sandbox MCP).

---
*Imported from Engram on 2026-09-06*
