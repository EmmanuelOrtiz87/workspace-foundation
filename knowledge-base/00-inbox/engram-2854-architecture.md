---
created: 2026-08-16 02:24:11
tags: [engram, architecture]
engram_id: 2854
type: architecture
---

# Load testing harness for multi-repo scenarios

**What**: Implemented roadmap item "Load testing for multi-repo scenarios" (STACK-OPTIMIZATION-ROADMAP.md line 425) as `src/load-test-multi-repo.ts` + `tests/unit/load-test-multi-repo.test.ts` (10 tests) + `load:test` npm script.
**Why**: The stack had no load testing for multi-repo operation; the roadmap listed it as an opportunity without a spec, so the harness was designed from scratch.
**Where**: src/load-test-multi-repo.ts, tests/unit/load-test-multi-repo.test.ts, package.json (load:test script).
**Learned**:
- Real concurrency requires async spawn (`runNpxTsx` + child 'close' event), NOT `runNpxTsxSync` (spawnSync blocks the event loop, so Promise.all gives zero parallelism).
- Child script paths MUST be resolved absolute against STACK_ROOT (`join(STACK_ROOT, spec.script)`) — repo-scoped ops run with cwd=temp repo, and a relative path like `src/check-sdd-gate.ts` breaks (node exits 1, no stdout).
- The full `src/core/health-check.ts` exits 1 when .atl/skill-embeddings.json is stale (>48h freshness check) — environmental flake. The load test uses a deterministic `--component session,factory,sdd,pnpm,lefthook,optimization,costtracking,mcpbridge` subset that always exits 0.
- watchtower `-Action health -Quiet` exits 0 even with WARNs (94 PASS/1 WARN/0 FAIL); only FAILs increment exitCode.
- sdd-gate in a fresh temp git repo exits 0 (branch 'master' not protected → gate skipped).
- Temp repos: mkdtempSync(join(tmpBase, 'gv-loadtest-')), cleaned in try/finally; `--skip-git` for CI without git.
- Exit code decision: 0 if success_rate >= 0.9 else 1 (decideExitCode).

---
*Imported from Engram on 2026-09-06*
