---
created: 2026-05-22 18:14:24
tags: [engram, bugfix]
engram_id: 1027
type: bugfix
---

# Session autostart fixes summary

**What**: Fixed session autostart pipeline failures: Export-ModuleMember error, CodeGraph stale index, skill registry unassigned skills, token usage session ID unknown
**Why**: Session autostart was failing at step 2/25 (session-manager), preventing workspace initialization
**Where**: scripts/utilities/engram-safe.ps1, scripts/utilities/session-manager.ps1, config/session-autostart.config.json, scripts/utilities/token-usage-notifier.ps1, config/auto-delegation.json
**Learned**: (1) Export-ModuleMember fails when dot-sourcing .ps1 scripts - must check $MyInvocation.MyCommand.CommandType or use SkipEngramSafe pattern. (2) CodeGraph sync runs but index age calculation shows 2249min stale - threshold may need adjustment or sync not updating LastWriteTime. (3) Token usage notifier shows "unknown" session when called before session initialization - fix Get-CurrentSessionId to use session-autostart session ID. (4) Skill registry shows unassigned skills when auto-delegation.json skillToAgentProfile missing mappings - need to add missing skills or update mappings

---
*Imported from Engram on 2026-09-06*
