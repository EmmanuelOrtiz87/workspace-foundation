---
created: 2026-06-02 11:03:30
tags: [engram, bugfix]
engram_id: 1285
type: bugfix
---

# PS scope bug — $script: vs local $vars in functions

**What**: release-automation.ps1 report showed "0/0 passed, 0 failed" despite all checks displaying [OK]. Root cause: `$results +=` inside Add-Result function created a new local $results instead of modifying the script-scoped $results. Fix: use `$script:results +=` and `$script:exitCode =`.

**Why**: In PowerShell, `$var += value` inside a function creates a new local variable initialized to $null, then adds the value — it does NOT inherit the parent scope's variable. This is a well-known PowerShell gotcha (automatic variable creation on first assignment).

**Where**: scripts/utilities/DEPLOYMENT/release-automation.ps1 — Add-Result and Write-Err functions

**Learned**: PowerShell functions DO have access to parent scope variables, but the FIRST assignment (`$results += ...`) creates a LOCAL copy. Use `$script:varname` to explicitly reference the script scope. Same rule applies to `$exitCode` — use `$script:exitCode` not `$global:exitCode`. Verified: after fix, release-automation.ps1 shows 12/12 passed correctly.

---
*Imported from Engram on 2026-09-06*
