---
created: 2026-08-06 05:19:21
tags: [engram, pattern]
engram_id: 2567
type: pattern
---

# validation scripts migration: spawnSync → runSyncShell

**What**: Converted 5 scripts/validation/*.ts files from `spawnSync('npx', ['tsx', ...], {cwd, stdio, encoding})` to `runSyncShell('npx tsx ...', { cwd: ROOT })` using src/core/run-command.js.
**Why**: Part of a stack-wide migration to the centralized command wrapper (windowsHide, no cmd.exe wrapping).
**Where**: scripts/validation/{detailed-real-values-demo,final-validation,full-stack-verification,practical-optimization-demo,real-world-simulation}.ts
**Learned**: (1) The task stated execSync but all 5 files actually used spawnSync — runSyncShell is a drop-in for spawnSync (returns RunSyncResult {stdout,stderr,status,error,signal}), so no `.stdout` suffix needed when code reads `.status`/`.stderr`. (2) `encoding: 'utf-8'` and `stdio: 'pipe'` are already the defaults in runSyncShell's DEFAULT_SYNC_OPTIONS — drop them. (3) `cwd` option is preserved. (4) A concurrent agent session in the same OpenCode desktop app was converting the OTHER 5 validation files (test-optimizations, test-simple, test-token-capture, validate-complete-system, validate-token-system) in parallel, causing transient tsc "Cannot find name 'spawnSync'/'execSync'" errors during mid-conversion states — don't treat those as your own failures. (5) Prettier reformats these demo files heavily (4-space→2-space indent) — required to pass the prettier --check gate.

---
*Imported from Engram on 2026-09-06*
