---
created: 2026-05-25 08:40:34
tags: [engram, bugfix]
engram_id: 1124
type: bugfix
---

# validate-release-homologation.ps1 — 3 parser bugs fixed

**What**: Fixed 3 categories of parser errors in `scripts/utilities/DEPLOYMENT/validate-release-homologation.ps1`: (1) variable names with hyphens like `$Gentle-VanguardRepoPath`, `$gentle-vanguard`, `$tagGentle-Vanguard` — PowerShell interprets hyphens as subtraction operator; (2) hashtable/pscustomobject unquoted keys with hyphens like `Gentle-Vanguard` and `gentle-vanguard`; (3) parameter name in .PARAMETER doc comment.

**Why**: These bugs prevented the script from being invoked, causing 18/23 E2E tests to fail.

**Where**: scripts/utilities/DEPLOYMENT/validate-release-homologation.ps1

**Learned**: PowerShell variable names cannot contain hyphens — this is a common trap when transliterating project names that use kebab-case into variable names. For hashtable keys with hyphens, quote them: `'key-with-hyphen' = value` (even in `[pscustomobject]@{}` literals).

---
*Imported from Engram on 2026-09-06*
