---
created: 2026-05-18 23:24:56
tags: [engram, bugfix]
engram_id: 949
type: bugfix
---

# Bug fix: detect-tool.ps1 sessionAutostart .cmd vs .ps1

**What**: Fixed detect-tool.ps1 returning session-autostart.cmd for Windows, which fails with `pwsh -File` (only accepts .ps1)
**Why**: When agents executed `pwsh -File scripts/utilities/session-autostart.cmd`, PowerShell rejected it because .cmd is not a valid PowerShell script extension
**Where**: scripts/utilities/detect-tool.ps1 lines 193-198
**Learned**: PowerShell `-File` parameter only accepts .ps1 extensions. The .cmd wrapper exists for CMD.exe native execution, but detect-tool.ps1 feeds the path to `pwsh -File`, which requires .ps1. Fix: changed fallback to .ps1 for all platforms.

---
*Imported from Engram on 2026-09-06*
