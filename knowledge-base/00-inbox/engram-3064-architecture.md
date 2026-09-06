---
created: 2026-08-24 21:46:50
tags: [engram, architecture]
engram_id: 3064
type: architecture
---

# Tenant boundary and deployment hardening

**What**: Added deployment-scoped tenant validation and hardened Kubernetes deployment configuration; added dashboard auth/WS E2E tests and tenant-boundary tests.
**Why**: Continue closing production blockers without pretending global SQLite/filesystem data is row-level isolated.
**Where**: src/deployment-tenant-context.ts; apps/web-dashboard/server/websocket-server.ts; apps/web-dashboard/src/components/TenantSelector.tsx; tests/e2e/dashboard-security.test.ts; tests/unit/deployment-tenant-context.test.ts; config/k8s/gentle-vanguard-deployment.yml; .env.example; reports/audits/STACK-END-TO-END-AUDIT-2026-08-24.md
**Learned**: Production requires a registered GENTLE_TENANT_ID and rejects mismatched selectors, but tables/filesystem artifacts without tenant provenance remain system-wide. Kubernetes still needs immutable image digest promotion and MCP still needs OS/container sandboxing before external exposure.

---
*Imported from Engram on 2026-09-06*
