---
created: 2026-05-21 03:46:05
tags: [engram, bugfix]
engram_id: 970
type: bugfix
---

# Agent-verify timeout fix - quick mode + guard

**What**: Added -Quick flag and global 30s domain timeout guard to agent-verify.ps1. Quick mode skips Pester test execution and routing matrix evaluation (just checks file existence). Added Test-DomainExpired() that aborts a domain block if it exceeds 30s, preventing the entire script from hanging.\n**Why**: agent-verify.ps1 timed out at >60s when running all 5 domains (52 checks). Root cause: Invoke-Pester with Import-Module Pester could hang if Pester wasn't installed, and the routing-quality-eval.ps1 subprocess could be slow.\n**Where**: scripts/utilities/agent-verify.ps1 — param block, Test-DomainExpired function, tests domain block with quick mode and Pester-missing guard\n**Learned**: PowerShell subprocess calls (pwsh -Command, Invoke-Pester) are the #1 cause of script timeouts. Always wrap external process calls with timeout guards. Adding -Quick mode for CI/in-session use vs full mode for pre-close gives the best UX balance.

---
*Imported from Engram on 2026-09-06*
