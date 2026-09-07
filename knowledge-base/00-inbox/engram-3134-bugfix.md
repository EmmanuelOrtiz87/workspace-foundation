---
created: 2026-08-25 13:35:26
tags: [engram, bugfix]
engram_id: 3134
type: bugfix
---

# MCP worker Windows startup grace

**What**: Added a bounded 5-second startup grace to the parent MCP execution-worker watchdog.
**Why**: Under Windows/parallel suite load, the parent watchdog could kill the tsx worker during startup (`timeoutMs + 1s`) before the worker enforced its own timeout/output limits, producing `MCP execution worker failed`.
**Where**: scripts/mcp/execution-worker.ts
**Learned**: The worker's internal timeout remains authoritative; the grace only prevents premature parent cleanup during startup and keeps a bounded fallback watchdog.

---
*Imported from Engram on 2026-09-06*
