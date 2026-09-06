---
created: 2026-08-24 23:42:45
tags: [engram, architecture]
engram_id: 3080
type: architecture
---

# Consolidated tenant-aware feedback and token persistence

**What**: Added TokenRepo as the SQLite owner for tenant-scoped token aggregates and transactions; dashboard POST /api/feedback now explicitly uses the tenant-aware TraceRepo; retained clearly labeled DatabaseManager.insertFeedback and token-ingest writeToNexus compatibility delegates.
**Why**: Remove duplicate persistence/schema ownership paths while preserving historical files and public callers.
**Where**: apps/web-dashboard/server/database/repositories/TokenRepo.ts, MigrationRunner.ts, manager.ts, websocket-server.ts, src/tokens/token-ingest.ts, tests/unit/database-tenant-isolation.test.ts.
**Learned**: Migration 013 rebuilds token_transactions to replace global message_id uniqueness with UNIQUE(message_id, tenant_id), allowing identical message IDs in separate tenants. Token ingestion writes aggregates/transactions only and does not emit duplicate events.

---
*Imported from Engram on 2026-09-06*
