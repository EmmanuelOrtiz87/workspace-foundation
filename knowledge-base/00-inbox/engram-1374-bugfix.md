---
created: 2026-06-09 13:07:29
tags: [engram, bugfix]
engram_id: 1374
type: bugfix
---

# Repaired agent-verify.ps1 template corruption

**What**: Repaired corrupt template in `scripts/utilities/agents/AGENT/agent-verify.ps1`  
**Why**: Template corruption injected full file content into catch `{$_}` placeholders across 15 duplicated copies, creating 14 corrupted catch blocks (7 ConvertFrom-Json type + 7 DateTimeOffset type) and 194 parse errors.  
**Where**: `scripts/utilities/agents/AGENT/agent-verify.ps1`  
**Learned**: The git HEAD version had 10671 lines (15x duplication). 7 ConvertFrom-Json and 7 DateTimeOffset catch blocks had their `$_` replaced with injected file content. The first copy (L1-548) also had missing closing braces for the structure domain block. Solution: extracted L1-83 (clean headers/param/setup/functions) + L1529-L2153 (clean sub-copy with all 6 domains + OUTPUT + exit from the first complete copy's third sub-copy) = 708 lines, 0 parse errors.

---
*Imported from Engram on 2026-09-06*
