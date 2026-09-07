---
created: 2026-05-22 18:09:33
tags: [engram, bugfix]
engram_id: 1023
type: bugfix
---

# Fix Export-ModuleMember error in session-manager autostart

**What**: Fixed session-manager.ps1 Export-ModuleMember error by adding -SkipEngramSafe parameter and conditional import in engram-safe.ps1 to detect script vs module execution context
**Why**: The Export-ModuleMember cmdlet can only be called from inside a module (.psm1), but session-manager.ps1 was dot-sourcing engram-safe.ps1 as a script, causing the error during session-autostart pipeline step 2/25
**Where**: scripts/utilities/engram-safe.ps1 (lines 172-182), scripts/utilities/session-manager.ps1 (added -SkipEngramSafe parameter and conditional import), config/session-autostart.config.json (added -SkipEngramSafe arg)
**Learned**: When dot-sourcing PowerShell scripts, Export-ModuleMember fails. Must check $MyInvocation.MyCommand.CommandType -eq 'Script' before exporting, or use -SkipEngramSafe pattern to bypass import entirely in autostart context

---
*Imported from Engram on 2026-09-06*
