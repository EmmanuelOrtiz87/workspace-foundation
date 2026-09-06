---
created: 2026-08-06 05:11:14
tags: [engram, pattern]
engram_id: 2564
type: pattern
---

# Converted scripts/database/ to runSyncShell pattern

**What**: Converted scripts/database/db-backup.ts and db-health.ts from `execSync` to `runSyncShell` from `../../src/core/run-command.js`.
**Why**: Centralize child process execution (windowsHide, consistent timeouts/stdio). sqlite3 CLI commands use shell syntax (.backup, .restore, .dump, PRAGMA) so `runSyncShell` (not `runSync`) is required.
**Where**: scripts/database/db-backup.ts, scripts/database/db-health.ts
**Learned**: Conversion pattern: replace `import { execSync } from 'child_process'` with `import { runSyncShell } from '../../src/core/run-command.js'`; drop `encoding: 'utf8'` (runSyncShell defaults utf-8); append `.stdout` to every call (even unused-result statements, matching scripts/recovery/db-health-check.ts style). Keep try/catch blocks intact. Note: `runSyncShell` does NOT throw on non-zero exit code (unlike execSync) — returns `{stdout, stderr, status, error}`. Typecheck (tsc --noEmit), eslint, and prettier all pass after conversion.

---
*Imported from Engram on 2026-09-06*
