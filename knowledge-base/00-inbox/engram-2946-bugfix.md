---
created: 2026-08-21 15:05:01
tags: [engram, bugfix]
engram_id: 2946
type: bugfix
---

# Fix sync-to-public: git array-form + status validation

**What**: Rewrote pushToAllBranches in src/sync-to-public.ts to use array-form git commands (runSync('git', ['commit', '-m', msg])) with exit-status validation on every command; also filtered sync to distribution branches only (main, develop), excluding dependabot branches.
**Why**: Two bugs: (1) runSyncShell string commands via `cmd /d /s /c` lose inner quotes (Node arg re-quoting) so `git commit -m "sync: automated..."` became pathspec errors → silent no-op while script printed "[OK] Committed"; pushes never persisted for months of runs. (2) Iterating ALL remote branches polluted dependabot PR branches.
**Where**: src/sync-to-public.ts (pushToAllBranches); public repo gentle-vanguard-public main/develop.
**Learned**: GOTCHA stack-wide: NEVER pass quoted strings through runSyncShell on Windows — cmd /d /s /c + Node spawnSync re-quoting strips inner quotes; use runSync with array args always. Also: never trust OK logs without checking .status (runSyncShell does not throw on non-zero exit). Verified fix: origin/main 473174aa has verify-installer.ts, CI Public Distribution Smoke green 48s.

---
*Imported from Engram on 2026-09-06*
