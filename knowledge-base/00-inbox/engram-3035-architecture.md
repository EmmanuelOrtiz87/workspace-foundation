---
created: 2026-08-24 20:52:44
tags: [engram, architecture]
engram_id: 3035
type: architecture
---

# Dashboard auth and tenant isolation design baseline

**What**: Inspected the dashboard auth and tenant implementation read-only and designed a minimal fail-closed/authenticated tenant isolation direction.
**Why**: User requested implementation-ready architecture without edits.
**Where**: apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/server/real-data.ts, apps/web-dashboard/server/shared-state-bridge.ts, apps/web-dashboard/server/database/repositories/MigrationRunner.ts, apps/web-dashboard/src/hooks/useSharedWs.ts, apps/web-dashboard/src/hooks/useSharedState.ts, apps/web-dashboard/src/hooks/useMetrics.ts, apps/web-dashboard/src/components/TenantSelector.tsx, config/tenant-registry.json, config/rbac-policy.json.
**Learned**: Current auth is fail-open when GV_DASHBOARD_TOKEN is absent; HTTP checks only non-exempt /api routes, while /metrics and health/auth status are exempt. WS native clients use no auth header and the server accepts URL token. Tenant selection is client-supplied and only metrics has a weak ID-like session count filter; most SQLite tables/queries and broadcasts are global and have no tenant_id. Existing tenant-context.ts provides filesystem paths but is not used by dashboard DB queries. Existing integration tests assume unauthenticated access and wildcard CORS, so auth tests need explicit isolated server env and CORS assertions updated.

---
*Imported from Engram on 2026-09-06*
