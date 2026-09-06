---
created: 2026-08-06 21:11:17
tags: [engram, bugfix]
engram_id: 2601
type: bugfix
---

# QA verify: token-usage-reader + compression + run-command fixes

**What**: QA verification of 3 integrity-gap fixes: new src/token-usage-reader.ts (single source of truth for token usage), output-compression.ts + prompt-compression.ts now use it, and run-command.ts resolveWindowsCommand for .cmd/.bat shims.
**Why**: Validate the stack is correct/integrated/functional after the changes.
**Where**: src/token-usage-reader.ts, src/output-compression.ts, src/prompt-compression.ts, src/core/run-command.ts
**Learned**:
- token-usage-reader reads real data: used=9158, budget=120000, pct=8.46%, source=reports/stack-live-observability-latest.json (authoritative).
- output-compression --profile auto selects 'lite' at 8.46% usage (auto threshold low:0→lite) — coherent.
- prompt-compression slice(-lastCount=0) fix verified: 3-line input → 1 line (no duplication). Multi-line 10→4 lines, ratio 0.394.
- runSync('codegraph',['--version']) works on Windows: resolveWindowsCommand finds codegraph.cmd via PATHEXT and routes through shell (status 0, "0.8.0").
- GOTCHA: `node --test tests/unit/*.test.ts` FAILS to resolve `.js`→`.ts` imports (e.g. src/core/run-command.js) without the tsx loader. Use `node --import tsx --test` or `npm test` (npx tsx src/test-runner.ts). 4 of 6 unit failures were this harness artifact.
- 2 pre-existing unrelated unit failures remain: timeout-config.test.ts expects config.timeouts wrapper (config has no 'timeouts' key), audit-pipeline index file not yet created (lazy).

---
*Imported from Engram on 2026-09-06*
