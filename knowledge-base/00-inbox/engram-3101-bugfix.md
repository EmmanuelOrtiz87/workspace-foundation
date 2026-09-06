---
created: 2026-08-25 01:14:04
tags: [engram, bugfix]
engram_id: 3101
type: bugfix
---

# Dashboard access restored

**What**: Fixed dashboard launcher to persist WS server as detached hidden process and corrected token propagation; verified login flow returns 200 and sets HttpOnly session cookie.
**Why**: Dashboard was up then died (detached:false + pipe + process.exit killed child) and env token was not in shell process.env, so POST /api/auth/login returned 401.
**Where**: src/dashboard-cmd-launcher.ts; env store GV_DASHBOARD_TOKEN/GENTLE_TENANT_ID (User scope); apps/web-dashboard/server/websocket-server.ts auth
**Learned**: dashboard-cmd-launcher must use detached:true + stdio:ignore + unref(); spawned WS inherits env from parent process.env, not automatically from User registry in existing shell — must set $env: in same PowerShell session after SetEnvironmentVariable.

---
*Imported from Engram on 2026-09-06*
