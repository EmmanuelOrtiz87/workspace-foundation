---
created: 2026-08-25 10:40:02
tags: [engram, pattern]
engram_id: 3118
type: pattern
---

# Per-tenant SLO objectives and burn-rate endpoint

**What**: Implementado SLO alerts por tenant. config/tenant-registry.json v1.1 con sección sloDefaults (availabilityTargetPct 99.9, latencyTargetMs 2000, errorBudgetPct 0.1) y soporte de overrides 'slo' por tenant individual. Helper getTenantSloObjectives(tenantId?) en websocket-server.ts (registry defaults → tenant overrides → fallback). calculateBurnRate(tenantId?) refactorizado: error-budget deriva de objetivos por tenant en vez del hardcodeado 1-0.999. Endpoint /api/slo/burn-rate acepta ?tenant= y retorna tenant/target/errorBudget/latencyTargetMs/windows.

**Why**: Último item P1 del plan — SLO alerts por tenant requerían definir objetivos configurables.

**Where**: config/tenant-registry.json, apps/web-dashboard/server/websocket-server.ts

**Learned**: Smoke test runtime completo verificado: el endpoint /api/metrics/prometheus está protegido por RBAC del P0 (401 sin auth — correcto); bypass devMode vía env GV_DASHBOARD_DEV_AUTH para localhost (auth.ts). Prometheus endpoint STATUS 200 con las 10 métricas incluidas las 4 OTel nuevas; burn-rate STATUS 200 con tenant=gentle-vanguard target=99.9 errorBudget=0.1 latencyTargetMs=2000 y 4 ventanas. Para probar overrides: agregar "slo": {"errorBudgetPct": 0.5} a un tenant del registry. Con esto el plan P1 queda 100% cerrado: config-loader + cache LRU + circuit-breaker v2 + pipeline OTel + SLO por tenant.

---
*Imported from Engram on 2026-09-06*
