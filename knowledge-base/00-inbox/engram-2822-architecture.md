---
created: 2026-08-14 04:31:56
tags: [engram, architecture]
engram_id: 2822
type: architecture
---

# Dashboard Stack Capabilities panel integración

**What**: Integración de las capacidades de Fase 1/2 (anomalías, circuit breakers, DB healing) en el dashboard de observabilidad
**Why**: El plan del usuario es operar con todas las herramientas y tener visibilidad de las nuevas capacidades nativas
**Where**: apps/web-dashboard/server/real-data.ts (getStackCapabilities), apps/web-dashboard/src/components/StackCapabilitiesPanel.tsx, apps/web-dashboard/src/types/dashboard.ts, apps/web-dashboard/src/components/Dashboard.tsx
**Learned**: getStackCapabilities() lee .runtime/anomaly-state.json + anomaly-alerts.json (predictive-anomaly-detector), .runtime/circuit-breaker-v2/state.json (circuit-breaker-v2), .runtime/db-healing/state.json (self-healing-db). El endpoint /api/metrics retorna { type:'metrics', data:{...} } — stackCapabilities está en data. El WS server requiere reinicio manual (dashboard-stop + relanzar con cmd /c set WS_PORT=8080 && npx.cmd tsx) para cargar código nuevo. Commit 46b86bcd.

---
*Imported from Engram on 2026-09-06*
