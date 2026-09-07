---
created: 2026-08-06 05:13:50
tags: [engram, bugfix]
engram_id: 2565
type: bugfix
---

# REVIEW scripts execSync → runSyncShell migration

**What**: Converted scripts/utilities/ops/REVIEW/{receipt-manager.ts,staged-review.ts} from `execSync` to the stack's `runSyncShell` wrapper. Replaced `import { execSync } from 'child_process'` with `import { runSyncShell } from '../../../../src/core/run-command.js'` and wrapped every call with `.stdout` (encoding option dropped since runSyncShell defaults to utf-8; `cwd: ROOT` preserved).
**Why**: Centralized command execution — windowsHide, consistent timeout/stdio handling, no cmd.exe wrapping.
**Where**: scripts/utilities/ops/REVIEW/receipt-manager.ts (9 calls), scripts/utilities/ops/REVIEW/staged-review.ts (4 calls)
**Learned**: Import path must be `../../../../src/core/run-command.js` from scripts/utilities/ops/REVIEW/ (4 dirs deep). runSyncShell returns RunSyncResult — always append `.stdout` for the result string. The multi-line call in staged-review.ts needed `.stdout` moved to end of the options object (prettier reformats).

---
*Imported from Engram on 2026-09-06*
