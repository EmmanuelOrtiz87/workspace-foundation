---
created: 2026-09-01 23:38:28
tags: [engram, decision]
engram_id: 3601
type: decision
---

# Design Hub Integration Complete

**What**: Complete Design Hub integration with Command Center + cleanup infrastructure for obsolete apps

**Why**: User requested full integration with start/stop scripts and removal of obsolete apps to prevent conflicts

**Where**:
- apps/design-hub/scripts/start.js (NEW)
- apps/design-hub/scripts/stop.js (NEW)
- apps/design-hub/scripts/status.js (NEW)
- apps/design-hub/package.json (updated with scripts)
- apps/command-center/server.ts (updated with Design Hub)
- apps/gv-design-studio/DEPRECATED.md (NEW - marks obsolete)
- apps/gv-design-system-catalog/DEPRECATED.md (NEW - marks obsolete)
- scripts/cleanup-obsolete-apps.ps1 (NEW - automated cleanup)
- docs/CLEANUP-GUIDE.md (NEW - documentation)

**Learned**:
- Command Center uses server.ts with APPS_REGISTRY and process definitions
- Design Hub needs start/stop/status scripts for lifecycle management
- PowerShell scripts can safely remove directories with dry-run and confirmation
- Deprecation markers prevent accidental use of obsolete apps
- PID file management (.runtime/*.pid) is critical for process tracking

**Key Features**:
1. Design Hub: npm run start/stop/status (like other apps)
2. Command Center: Design Hub registered with port 8095
3. Obsolete apps: Marked with DEPRECATED.md
4. Cleanup script: Safe removal with dry-run and confirmation
5. Process lifecycle: PID files, port probing, proper termination

**Obsolete Apps**:
- apps/gv-design-studio (React) → DEPRECATED
- apps/gv-design-system-catalog (HTML) → DEPRECATED

**Migration Status**: ✅ Complete and ready for activation

---
*Imported from Engram on 2026-09-06*
