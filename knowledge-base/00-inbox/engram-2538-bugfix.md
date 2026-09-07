---
created: 2026-08-04 21:05:13
tags: [engram, bugfix]
engram_id: 2538
type: bugfix
---

# Dashboard WS server repair - PID files cleaned

**What**: Cleaned stale PID files and identified dashboard WS server restart needed
**Why**: Watchdog PID 45848 and WS server PID 21732 both dead, port 8080 not listening
**Where**: .runtime/dashboard-ws-watchdog.pid, .runtime/dashboard-ws.pid, .runtime/dashboard-ports.json
**Learned**: Dashboard has a known failure pattern where health check is inconclusive and both processes die. The cleanStaleFiles() routine in dashboard-ws-autostart.ts should handle this, but needs manual intervention when processes are confirmed dead.

---
*Imported from Engram on 2026-09-06*
