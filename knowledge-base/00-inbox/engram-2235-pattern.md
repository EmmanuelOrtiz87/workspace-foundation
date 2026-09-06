---
created: 2026-07-29 04:47:52
tags: [engram, pattern]
engram_id: 2235
type: pattern
---

# Presentations server scripts (start/stop)

**What**: Created start-presentations-server.ps1 and stop-presentations-server.ps1 in scripts/utilities/presentations/
**Why**: Need a local static file server for serving presentation books in docs/presentations/
**Where**: scripts/utilities/presentations/start-presentations-server.ps1, scripts/utilities/presentations/stop-presentations-server.ps1
**Learned**: Server detection chain is npx serve -> Python http.server -> PowerShell HttpListener fallback. Host IP extracted via Get-NetIPAddress filtering out loopback/virtual/Docker adapters. Logging to .runtime/presentations-server.log. Stop script uses Get-NetTCPConnection to find owning PID then kills it.

---
*Imported from Engram on 2026-09-06*
