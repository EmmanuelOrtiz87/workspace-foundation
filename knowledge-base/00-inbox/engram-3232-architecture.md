---
created: 2026-08-29 07:04:22
tags: [engram, architecture]
engram_id: 3232
type: architecture
---

# F2.5 split secret-scanner.ts into per-domain modules

**What**: Split `src/security/secret-scanner.ts` (1424 lines) into 6 per-domain modules under `src/security/secret-scanner/` (patterns, config, entropy, ignore, scanner, report) and rewrote the original as a 40-line thin barrel re-exporting all 6 via `export *`.
**Why**: F2.5 mechanical refactor task — zero behavior changes, importers untouched.
**Where**: src/security/secret-scanner.ts (barrel, 40 lines), src/security/secret-scanner/{patterns.ts 744, config.ts 161, entropy.ts 20, ignore.ts 91, scanner.ts 341, report.ts 44}.
**Learned**: (1) MUST use `.js` extension specifiers in the barrel/module imports, NOT `.ts` — TS 5.9 with `moduleResolution: bundler` errors TS5097 on `.ts` imports unless `allowImportingTsExtensions` is set, which requires `noEmit` (would break `build:mcp` = `pnpm tsc` which emits to dist/). `.js` specifiers resolve to `.ts` under bundler resolution and via tsx; the CLI already used `./secret-scanner.js`. (2) Circular imports avoided: patterns.ts/config.ts/report.ts import only TYPES from scanner.ts (`import type`), scanner.ts imports runtime values (loadConfig, getPatterns, shannonEntropy, ignore helpers) — no runtime cycle. (3) `tests/unit/secret-scanner.test.ts` uses `node:test` (describe/it from 'node:test'), so `npx vitest run` fails with "No test suite found" — the correct runner is `npx tsx --test tests/unit/secret-scanner.test.ts` (31/31 pass). (4) A concurrent refactor of src/resilience/response-cache.ts and src/session/session-close-orchestrator.ts was in-flight in the same working tree during this task (missing database/db.ts caused transient full-repo tsc failures); it completed and full `npx tsc --noEmit` passes.

---
*Imported from Engram on 2026-09-06*
