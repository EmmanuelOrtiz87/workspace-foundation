---
created: 2026-08-24 21:08:06
tags: [engram, bugfix]
engram_id: 3049
type: bugfix
---

# SQLite reliability hardening

**What**: Configured DatabaseManager busy_timeout from database.sqlite_busy_timeout_ms before WAL setup, wrapped MigrationRunner migration discovery/application/markers in one transaction, and moved pruneAll VACUUM after the pruning transaction.
**Why**: Reduce SQLITE_BUSY failures and prevent partial schema migrations or VACUUM-in-transaction errors while preserving existing database behavior.
**Where**: apps/web-dashboard/server/database/manager.ts, apps/web-dashboard/server/database/repositories/MigrationRunner.ts, apps/web-dashboard/server/database/repositories/HousekeepingRepo.ts, tests/unit/database-reliability.test.ts
**Learned**: Atomic migration rollback can be tested by forcing migration 005's second ALTER TABLE to fail; VACUUM must execute only after the prune transaction commits.

---
*Imported from Engram on 2026-09-06*
