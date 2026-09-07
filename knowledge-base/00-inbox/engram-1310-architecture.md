---
created: 2026-06-03 10:55:30
tags: [engram, architecture]
engram_id: 1310
type: architecture
---

# Unified launcher v3.0 — Foundation split removed

**What**: Consolidated 2 launchers (Gentle-Vanguard + Foundation) into 1 unified launcher with wizard UI. Rewrote build/Gentle-Vanguard-Launcher.ps1 v3.0 as interactive setup wizard with menu (Full/Minimal/Reconfigure/Env Check/Help/Exit). Deleted Foundation-Launcher.ps1, Foundation.bat, foundation-installer .nsi templates, compiled Foundation-Launcher.exe. Updated create-installer.ps1 to single reference. Recompiled .exe (51,200 bytes). Committed and synced to public repo.
**Why**: User wanted ONE .exe that handles everything (installation, config, launch) without depending on order/selection of 2 launchers
**Where**: build/Gentle-Vanguard-Launcher.ps1, build/create-installer.ps1, build/compiled/Gentle-Vanguard-Launcher.exe
**Learned**: ps2exe -noConsole flag produces GUI-style .exe that works with Read-Host via console. build/ directory is in .gitignore, force-add (-f) required for launcher .ps1 tracking.

---
*Imported from Engram on 2026-09-06*
