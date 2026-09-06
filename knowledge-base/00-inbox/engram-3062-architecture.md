---
created: 2026-08-24 21:45:03
tags: [engram, architecture]
engram_id: 3062
type: architecture
---

# Deployment-scoped tenant boundary

**What**: Added a Zod-validated deployment tenant context from GENTLE_TENANT_ID and config/tenant-registry.json; production dashboard startup fails closed without a registered tenant, request/WS tenant selectors must match the configured deployment tenant, metrics default to that tenant, and system-wide development metrics are explicitly labeled.
**Why**: Implement the smallest safe deployment-scoped boundary without claiming database isolation or performing a migration.
**Where**: src/deployment-tenant-context.ts, apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/src/components/TenantSelector.tsx, apps/web-dashboard/src/types/dashboard.ts, tests/unit/deployment-tenant-context.test.ts, tests/e2e/dashboard-security.test.ts.
**Learned**: Existing dashboard server/auth/resource hardening was already uncommitted; preserve it and avoid broad formatting rewrites. All-Tenants UI is hidden when the API exposes zero/one deployment tenant.

---
*Imported from Engram on 2026-09-06*
