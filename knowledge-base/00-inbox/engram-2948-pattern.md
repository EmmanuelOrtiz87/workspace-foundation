---
created: 2026-08-21 16:51:12
tags: [engram, pattern]
engram_id: 2948
type: pattern
---

# check-shell-quoting auditor nativo + fixes high-risk

**What**: Created src/check-shell-quoting.ts — native static analyzer detecting runSyncShell calls with quoted interpolations (the cmd.exe quote-stripping gotcha), classified high/medium/low risk, --json mode, npm script `audit:shell-quoting`. Fixed all HIGH findings to array-form runSync: optimize-engram-usage.ts (runEngram), rescue-database.ts (both sqlite3 calls + status validation fix), semantic-search.ts (rg array form + graphify query rewritten natively with readFileSync — eliminated inline tsx -e eval with interpolated query: quoting bug AND code-injection risk), design-token-pipeline.ts (runNpxTsxSync).
**Why**: The sync-to-public bug class (cmd /d /s /c strips inner quotes → silent pathspec errors) could affect ~30 other call sites stack-wide.
**Where**: src/check-shell-quoting.ts; fixes in src/optimize-engram-usage.ts, src/rescue-database.ts, src/semantic-search.ts, src/design-token-pipeline.ts.
**Learned**: Prefer native TS over subprocess for logic like JSON queries (faster + no quoting/injection). runSyncShell is only safe when arguments are single tokens without quotes. Remaining 14 findings (6 medium, 8 low) queued for batch pass. Commit 24c56a40 pushed private main+develop, synced public, CI green 43s.

---
*Imported from Engram on 2026-09-06*
