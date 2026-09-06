---
created: 2026-08-06 19:28:31
tags: [engram, bugfix]
engram_id: 2596
type: bugfix
---

# Fixed checkpoint verify CLI + rollback verification mismatch (safety net fully functional)

**What**: Fixed 2 bugs in the checkpoint/rollback safety net so it's fully functional before any further optimization.

**Why**: User asked to optimize without losing capabilities or leaving things broken. Verified the rollback safety net first — found it had bugs.

**Where**: src/checkpoint-manager.ts, src/rollback-orchestrator.ts

**Learned**:
1. **checkpoint-manager.ts CLI `verify` bug**: The shared destructuring `const [, , action = 'list', rootArg = process.cwd()] = process.argv` consumed argv[3] as rootArg, misaligning verify's checkpointId lookup (it read argv[4] which was empty). Fixed by removing rootArg from the shared destructuring (root always defaults to cwd) and reading checkpointId from argv[3].
2. **rollback-orchestrator.ts mismatch**: It called `['verify', ROOT, checkpointId]` expecting the old `verify <root> <checkpointId>` signature, but the CLI uses `verify <checkpointId>` (root=cwd). This caused "Verification output could not be parsed" WARN and verification:"UNKNOWN". Fixed to `['verify', checkpointId]`.
3. **Checkpoint system works**: createCheckpoint captures .session files with SHA256 hashes. Verified: 38 files captured, verify returns INTACT (valid:38, invalid:0, missing:0), rollback restores 38 files with 0 errors.
4. **Gotcha**: Empty checkpoints from earlier sessions were because .session had no data yet at creation time, NOT a bug in the capture logic.
5. **The rollback safety net is now fully functional**: health check 3/3, checkpoint integrity verified, rollback restores files, verification parses correctly (INTACT).

**Where**: Verified: typecheck 0, lint 0, rollback dry-run valid=true, rollback real verification=INTACT.

---
*Imported from Engram on 2026-09-06*
