---
created: 2026-08-29 17:53:23
tags: [engram, bugfix]
engram_id: 3298
type: bugfix
---

# Fix response cache LRU timestamp precision

**What**: Updated SQLite LRU touch timestamps to use fractional-second precision and removed the test's 1.1s delay.
**Why**: The root runner failure was caused by shared SQLite cache state plus an async test window; additionally, datetime('now') only has second precision, so rapid touches were not reliably newer than creation timestamps.
**Where**: src/resilience/response-cache/sqlite.ts, tests/unit/response-cache-telemetry.test.ts
**Learned**: The cache implementation and telemetry were not the source of the reported post-set miss; test isolation exposed a real LRU timestamp precision weakness. Telemetry and cache limits remain unchanged.

---
*Imported from Engram on 2026-09-06*
