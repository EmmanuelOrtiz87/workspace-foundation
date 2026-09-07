---
created: 2026-07-28 05:27:45
tags: [engram, architecture]
engram_id: 2137
type: architecture
---

# Token tracking connected to Nexus DB SQLite

**What**: Connected token-usage-auto.ts to write token_usage records to Nexus DB SQLite (.runtime/gentle-vanguard.db) via better-sqlite3 direct insert. This enables historical token tracking per session in the operational database.

**Why**: The token_usage table existed (migration 002) but nothing was writing to it. The dual-write in token-tracker.ts (recordTokenUsage) was never called. By adding a direct SQLite insert in token-usage-auto.ts (which runs on every turn from post-tool-use-log.ts hook), every tool call's token usage is now persisted to Nexus DB.

**Where**: src/token-usage-auto.ts — added `writeTokenToNexus()` function and call at end of main()

**Learned**: better-sqlite3 is available globally. The DB path is .runtime/gentle-vanguard.db. The insert uses the same schema as DatabaseManager.recordTokenUsage(). Total_tokens column is auto-generated (computed column from migration). Verified with test record (700 tokens, session_id=test-nexus-connection).

---
*Imported from Engram on 2026-09-06*
