---
created: 2026-08-24 23:45:20
tags: [engram, architecture]
engram_id: 3086
type: architecture
---

# Backlog routing skill tenant migration

**What**: Added migration 012_backlog_routing_skill_tenant_isolation after migration 011, backfilled backlog_items and rebuilt skill_usage/routing_rules with tenant-aware uniqueness, indexes, and default tenant ownership. Updated BacklogRepo, SkillRepo, DatabaseManager, dashboard APIs, backlog CLI, and housekeeping predicates; added cross-tenant isolation tests.
**Why**: Stage safe tenant isolation for backlog and routing/skill usage without adding unsafe tenant columns to child backlog tables; child records inherit ownership through joins/parent validation.
**Where**: apps/web-dashboard/server/database/repositories/MigrationRunner.ts, BacklogRepo.ts, SkillRepo.ts, HousekeepingRepo.ts, manager.ts, real-data.ts, websocket-server.ts, src/cli/backlog.ts, tests/unit/database-tenant-isolation.test.ts
**Learned**: Existing skill/routing uniqueness required table rebuilds to make ON CONFLICT tenant-aware. Dashboard callers must pass deploymentTenant.tenantId explicitly; legacy manager delegates retain default tenant compatibility.

---
*Imported from Engram on 2026-09-06*
