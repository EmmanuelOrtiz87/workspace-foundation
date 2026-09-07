---
created: 2026-05-21 04:47:13
tags: [engram, bugfix]
engram_id: 980
type: bugfix
---

# Karpathy enforcer param() bug fix

**What**: karpathy-enforcer.ps1 in utilities/ was failing to delegate correctly because it had no param() block. PowerShell's -File parameter binding requires explicit param() — without it, $Trigger was always $null. Fix: added `param([ValidateSet('session-start','session-close','pre-commit','idle')][string]$Trigger, [switch]$AutoFix, [switch]$VerboseOutput)` and proper delegation logic to scripts/adaptive/karpathy-enforcer.ps1. **Why**: The enforcer was silently failing, never delegating enforcement to adaptive/ version. This broke karpathy guideline enforcement at session boundaries. **Where**: scripts/utilities/karpathy-enforcer.ps1 **Learned**: PowerShell param() block is NOT optional when using -File invocation, even with named args. Always add param() if the script accepts any parameters.

---
*Imported from Engram on 2026-09-06*
