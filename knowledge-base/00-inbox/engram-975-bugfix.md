---
created: 2026-05-21 04:09:03
tags: [engram, bugfix]
engram_id: 975
type: bugfix
---

# Karpathy enforcer delegation fix - missing param block

**What**: Fixed karpathy-enforcer.ps1 delegation wrapper — added missing param() block. The wrapper at scripts/utilities/karpathy-enforcer.ps1 was delegating to scripts/adaptive/karpathy-enforcer.ps1 but had no param() block, so $Trigger was never populated when invoked via -File (PowerShell -File doesn't bind named params without param block). The delegated call passed $null triggering ValidateSet violation.\n**Why**: Script ran with exit 0 but produced non-terminating validation errors ("Cannot validate argument on parameter 'Trigger'. The argument '' does not belong to the set"). The adaptive version has [ValidateSet('session-start','pre-commit','code-review','task-complete')] and requires proper param binding.\n**Where**: scripts/utilities/karpathy-enforcer.ps1: added param([ValidateSet]...[string]$Trigger, [switch]$AutoFix, [switch]$VerboseOutput)\n**Learned**: ANY PowerShell wrapper script that delegates must have an explicit param() block. -File invocation does NOT auto-bind named params without it. Use $PSScriptRoot instead of Split-Path $MyInvocation.MyCommand.Definition for script directory. Also ran a repo-wide scan: 2 other wrapper scripts had false positives (they DID have param blocks, my initial regex was wrong). Always use (?m) multiline flag when scanning for param() across multi-line scripts.

---
*Imported from Engram on 2026-09-06*
