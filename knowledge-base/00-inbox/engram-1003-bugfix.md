---
created: 2026-05-22 02:59:37
tags: [engram, bugfix]
engram_id: 1003
type: bugfix
---

# PowerShell $Pid automatic variable bug

**What**: `$Pid` is a read-only automatic variable in PowerShell (current process ID). Using it as a function parameter name (`param([int]$Pid)`) causes "Cannot overwrite variable Pid because it is read-only or constant" error when the function is called with `-Pid $value`.

**Why**: Discovered while testing `Test-ProcessAlive` function in background-watchdog.ps1 — it errored on every call.

**Where**: `scripts/utilities/background-watchdog.ps1` — function parameter renamed from `$Pid` to `$TargetPid`

**Learned**: Never use `$Pid`, `$?`, `$_`, `$Input`, `$This`, `$Args`, `$MyInvocation`, or other PowerShell automatic/reserved variables as parameter names. Complete list: `Get-Variable | Where-Object Options -match 'ReadOnly|Constant'`.

---
*Imported from Engram on 2026-09-06*
