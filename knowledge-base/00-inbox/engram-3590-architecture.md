---
created: 2026-09-01 20:21:40
tags: [engram, architecture]
engram_id: 3590
type: architecture
---

# Loop Guard Middleware + Full System Verification

**What**: Created Loop Guard Middleware for workflow protection + verified all systems operational
**Why**: Loop guard was created but not connected to actual workflows; need middleware for easy integration
**Where**: src/core/loop-guard-middleware.ts

**Learned**:
- Created loop-guard-middleware.ts with withLoopGuard() wrapper function
- Any async function can be wrapped: withLoopGuard(myTask, { taskName: 'my-task' })
- Tracks task history, detects repeated failures, alternating patterns
- Configurable: maxRetries, failFast, verbose
- CLI: --status, --reset, --task <name> --command <cmd>
- Token-ingest verified working: 11 sessions, multiple sources (opencode, zcode, codex, minimax)
- All systems operational: DB 20.93MB, 36 tables, 84343 rows

**Integration example**:
  import { withLoopGuard } from './loop-guard-middleware.js';
  const safeTask = withLoopGuard(myAsyncFunction, { taskName: 'build', maxRetries: 3 });
  await safeTask();

---
*Imported from Engram on 2026-09-06*
