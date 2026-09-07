---
created: 2026-06-09 12:51:23
tags: [engram, bugfix]
engram_id: 1373
type: bugfix
---

# Fixed template corruption in context.ps1

**What**: Repaired template corruption in `context.ps1` where `$_` in catch blocks was replaced with full file content, causing 939 parse errors and 38.7x function duplication

**Why**: The file had `$_` variable expansion done inside string literals during template processing, which pasted the entire file content into catch blocks

**Where**: scripts/utilities/workflow/WORKFLOW-ORCHESTRATION/commands/context.ps1

**Learned**: The fix required extracting the first clean copy of 10 unique functions from git HEAD, replacing the corrupted Get-TokenAutopilotPolicy function (which had 3 corrupted catch blocks inside it) with a clean version found later in the file, and removing all trailing duplication. Final file: 125 lines, 10 functions, 0 parse errors.

---
*Imported from Engram on 2026-09-06*
