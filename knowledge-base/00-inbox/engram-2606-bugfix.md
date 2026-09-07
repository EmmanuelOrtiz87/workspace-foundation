---
created: 2026-08-06 21:57:29
tags: [engram, bugfix]
engram_id: 2606
type: bugfix
---

# gv CLI isDashboardRunning always returns true

**What**: In the consolidated CLI `src/cli/gv.ts`, `isDashboardRunning()` always returns `true` because it calls `runSync('curl', ['-s','http://localhost:8080/health'])` but `runSync` (src/core/run-command.ts) NEVER throws on non-zero exit — it catches errors internally and returns a result object with `status`. So the try/catch in isDashboardRunning never triggers the `return false` branch. Result: `gv dashboard status` and `gv status` falsely report "Dashboard running" even when the WS server (port 8080) is down.
**Why**: Found during QA verification of the gv CLI consolidation (legacy src/gv.ts removed, migrated to src/cli/gv.ts).
**Where**: src/cli/gv.ts line ~307 (isDashboardRunning), src/core/run-command.ts runSync (lines 202-219).
**Learned**: runSync returns {status, error} and does not throw on non-zero exit. Correct pattern: check `result.status !== 0` or `result.error` instead of try/catch. Verified: curl exit 7 (failed to connect) but isDashboardRunning() returned true. Watchtower correctly reported dashboard-ws FAIL (3 fails: HTTP API not responding, watchdog PID 30444 not running, WS PID 23136 not running).

---
*Imported from Engram on 2026-09-06*
