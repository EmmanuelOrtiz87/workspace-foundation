---
created: 2026-08-24 23:13:04
tags: [engram, architecture]
engram_id: 3075
type: architecture
---

# Observability tenant isolation slice

**What**: Added migration 011_observability_tenant_isolation for traces, token_usage, token_transactions, alerts, feedback, and response_cache with gentle-vanguard defaults/backfill and tenant indexes; rebuilt feedback/cache to support tenant-safe composite uniqueness. Updated repository APIs, token ingest tagging, dashboard trace/SLO/feedback reads, and added isolation tests.
**Why**: Prevent cross-tenant observability rows and stop unscoped global data from being returned as tenant dashboard data.
**Where**: apps/web-dashboard/server/database/repositories/MigrationRunner.ts, TraceRepo.ts, EventRepo.ts, SkillRepo.ts, CacheRepo.ts, manager.ts, real-data.ts, websocket-server.ts, telemetry-ingest.ts; src/tokens/token-ingest.ts; tests/unit/database-tenant-isolation.test.ts
**Learned**: response_cache key and feedback span_id were globally unique, so simple tenant columns were insufficient; migration rebuilds those tables with composite uniqueness. Full repository has unrelated pre-existing working-tree changes.

---
*Imported from Engram on 2026-09-06*
