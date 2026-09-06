---
created: 2026-09-02 00:25:18
tags: [engram, decision]
engram_id: 3603
type: decision
---

# Bash Scripts for App Lifecycle Management

**What**: Created bash start/stop scripts for Command Center and all native apps

**Why**: User needs scripts to manage app lifecycle and verify Design Hub appears in Command Center

**Where**:
- scripts/command-center-start.sh (NEW)
- scripts/command-center-stop.sh (NEW)
- scripts/app-manager.sh (NEW - master script for all apps)

**Learned**:
- App lifecycle management requires PID tracking in .runtime/
- Each app needs unique port and start command
- Command Center uses node --import tsx server.ts
- Design Hub uses python http.server like Academy
- Status checking requires port probing and PID validation

**Key Commands**:
- Command Center: port 8090, node server.ts
- Design Hub: port 8095, python http.server
- All apps tracked in .runtime/app-<name>.pid

**To verify Design Hub**:
1. Restart Command Center (to load new server.ts)
2. Check http://127.0.0.1:8090 for Design Hub in app list
3. If not visible, hard refresh browser or use incognito mode

---
*Imported from Engram on 2026-09-06*
