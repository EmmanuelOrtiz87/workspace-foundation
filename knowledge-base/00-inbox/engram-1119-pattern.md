---
created: 2026-05-25 08:11:55
tags: [engram, pattern]
engram_id: 1119
type: pattern
---

# stack-health-check.ps1 — comprehensive smoke test

**What**: Created `scripts/utilities/stack-health-check.ps1` with 33 checks across 6 phases (core scripts, configs, hooks, cross-tool configs, security, governance). Validates entire Gentle-Vanguard stack is 100% functional with exit code 0 = pass.

**Why**: Needed a single command to verify all infra is healthy after changes, complementing the Pester test suite.

**Where**: scripts/utilities/stack-health-check.ps1

**Learned**: PowerShell scriptblock scoping — `$_` inside a `foreach` loop is NOT captured by scriptblocks passed to functions. Must use `.GetNewClosure()` to capture `$cfg` by value. Also `exit` inside a scriptblock executed with `&` exits the parent script, not the function — use boolean returns instead.

---
*Imported from Engram on 2026-09-06*
