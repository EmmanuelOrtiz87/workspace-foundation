---
created: 2026-08-29 18:47:20
tags: [engram, bugfix]
engram_id: 3311
type: bugfix
---

# Fixed hidden watchtower task registration

**What**: Replaced the broken PowerShell-first scheduled-task path with native schtasks.exe registration using direct node.exe --import tsx <script>, added native wscript hidden-wrapper fallback, and retained PowerShell only as an explicitly documented last resort. Fixed generated/runtime VBS quoting and hidden Run mode.
**Why**: The existing VBS line was invalid VBScript and attempted to run pwsh with node arguments, causing autoheal task failures/visible-shell risk.
**Where**: src/infrastructure/bootstrap.ts, .runtime/gentle-vanguard-watchtower-autoheal.vbs, tests/unit/bootstrap-watchtower-vbs.test.ts, src/integrations/codegraph-sync-autostart.ts, src/ops/watchtower-autoheal-autostart.ts.
**Learned**: Native schtasks actions do not provide a working-directory option, so auto-start scripts derive the repository root from import.meta.url; wscript.Run requires the entire command as one quoted VBScript string with show-window mode 0.

---
*Imported from Engram on 2026-09-06*
