---
created: 2026-08-24 22:01:51
tags: [engram, architecture]
engram_id: 3070
type: architecture
---

# Tenant migration and MCP worker tranche

**What**: Implemented tenant first-slice migrations/repositories, persistent dashboard auth sessions, restricted MCP worker, and fixed Windows temp-workspace cleanup. Added deployment-boundary and E2E coverage.
**Why**: Continue production-readiness remediation and make all safe stack tools operable without unsafe cross-tenant access or shell execution.
**Where**: apps/web-dashboard/server/database/repositories/MigrationRunner.ts, AuthSessionRepo.ts, SessionRepo.ts, EventRepo.ts, MetricsRepo.ts; apps/web-dashboard/server/database/manager.ts; src/deployment-tenant-context.ts; scripts/mcp/execution-worker.ts; config/mcp-execution-policy*.json; tests/unit/database-tenant-isolation.test.ts; tests/e2e/dashboard-security.test.ts; reports/audits/STACK-END-TO-END-AUDIT-2026-08-24.md
**Learned**: DB now reports 27 tables, 10 migrations, integrity OK. Full root suite passes after retrying a transient Windows EBUSY in config-diff-detector. The tenant slice covers metrics/sessions/events only; other tables/filesystem data remain system-wide. MCP policy remains empty and fail-closed because OS-level sandboxing is not yet available. Embedding refresh did not clear the watchtower warning.

---
*Imported from Engram on 2026-09-06*
