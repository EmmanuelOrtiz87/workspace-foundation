---
created: 2026-08-29 22:18:24
tags: [engram, bugfix]
engram_id: 3361
type: bugfix
---

# Fixed timeout monitor stale pidfile lifecycle

**What**: Moved ownership of `.runtime/monitor-daemon.pid` from the detached launcher into `timeout-monitor.ts`; the daemon writes its own PID after startup and removes it on SIGINT, SIGTERM, and process exit, guarded so it only removes its own PID. The launcher now only starts/logs the child and no longer writes a speculative PID.
**Why**: The launcher wrote the child PID before the daemon claimed lifecycle ownership and had no cleanup path, so failed/dead monitor starts left a stale pidfile that reappeared across autostart/watchtower.
**Where**: `src/ops/start-monitor-daemon.ts`, `src/core/timeout-monitor.ts`, `tests/unit/timeout-monitor-pidfile.test.ts`
**Learned**: The timeout monitor daemon and its process-hygiene registry are still active/correctly named; the recurring issue was lifecycle ownership, not a retired or renamed daemon. Existing unrelated hung one-shot PID 21360 was left untouched per safety requirement.

---
*Imported from Engram on 2026-09-06*
