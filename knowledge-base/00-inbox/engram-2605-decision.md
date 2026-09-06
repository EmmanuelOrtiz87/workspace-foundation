---
created: 2026-08-06 21:25:55
tags: [engram, decision]
engram_id: 2605
type: decision
---

# Premortem: consolidación CLIs gv (legacy → cli)

**What**: Premortem analysis on consolidating two `gv` CLIs: `src/gv.ts` (legacy, orphaned, no npm script) → `src/cli/gv.ts` (canonical, target of `gv` npm script). SAD recommended migrating 5 useful commands (session, dashboard, status, cleanup, fix), deleting `src/gv.ts`, fixing references.
**Why**: Two CLIs cause divergent `health`/`status` behavior and drift.
**Where**: src/cli/gv.ts, src/gv.ts, package.json:123, 6 migrators (ps1-mass-migrate, mass-ps1-replacer, ps1-terminator, skills-ps1-cleaner, auto-ps1-fixer, config-ps1-cleaner), docs (QUICK-START.md, start.bat, quick-start.ts, BENCHMARK-START.md), hooks (pre-commit, pre-commit-privacy), validators (session-close-validator, cross-workspace-validator).
**Learned**: (1) No module `import` of src/gv exists — only string literals, so deletion won't break compilation. (2) Legacy imports `./core/run-command.js` (has async `run`, `runSyncShell`, `runNpxTsxSync`); canonical only imports `runSync` from adapters — dashboard command needs async helper. (3) Legacy default command = `status`, canonical = `help`; legacy `health`→`npm run watchtower:health`, canonical `health`→`maintenance-watchtower --action health`. (4) Biggest real risk = 6 migrators + 4 docs writing `src/gv.ts` as replacement target → broken refs after deletion. RECOMMENDATION: consolidate NOW but as coordinated single commit (port logic verbatim + update migrators/docs/hooks/validators + regression tests + typecheck) before `git rm src/gv.ts`. Risk of consolidating < risk of keeping 2 CLIs.

---
*Imported from Engram on 2026-09-06*
