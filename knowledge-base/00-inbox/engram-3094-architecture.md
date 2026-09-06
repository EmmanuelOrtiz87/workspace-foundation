---
created: 2026-08-25 00:47:59
tags: [engram, architecture]
engram_id: 3094
type: architecture
---

# Refactored backlog CLI to tenant-aware repository

**What**: Replaced raw SQLite SQL in src/cli/backlog.ts with DatabaseManager.backlog/BacklogRepo calls, explicit migration initialization, default tenant fallback, and tenant-scoped CRUD/reporting.
**Why**: Remove duplicate persistence logic and enforce existing tenant isolation while preserving CLI commands/output.
**Where**: src/cli/backlog.ts, apps/web-dashboard/server/database/repositories/BacklogRepo.ts, tests/unit/backlog-cli.test.ts, config/gentle-vanguard-sync.json
**Learned**: BacklogRepo.countItems needed search filtering so list counts remain equivalent to the former CLI query; CLI subprocess tests are reliable with temporary GENTLE_VANGUARD_DB_DIR values.

---
*Imported from Engram on 2026-09-06*
