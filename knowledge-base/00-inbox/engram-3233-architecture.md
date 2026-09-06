---
created: 2026-08-29 07:06:36
tags: [engram, architecture]
engram_id: 3233
type: architecture
---

# F2.5 split: response-cache.ts → per-domain modules + barrel

**What**: Split `src/resilience/response-cache.ts` (1213 lines) into 5 per-domain modules under `src/resilience/response-cache/` (semantic.ts, sqlite.ts, telemetry.ts, cache.ts, cli.ts) with `response-cache.ts` rewritten as a 31-line thin barrel (`export *` from all 5). Mechanical refactor, zero behavior changes; 11 importers untouched.

**Why**: F2.5 refactor task — reduce monolith file size, mirror the earlier watchtower split pattern.

**Where**: src/resilience/response-cache.ts (barrel, 31 lines), src/resilience/response-cache/{semantic,sqlite,telemetry,cache,cli}.ts (234/337/108/342/186 lines).

**Learned**:
- `DEFAULT_CONFIG` (CacheConfig) lives in sqlite.ts and is exported — needed by sqliteGet/sqliteSet (sqlite.ts), ResponseCache (cache.ts), runCLI (cli.ts). Rides along in barrel `export *` (additive export, harmless).
- The CLI entry-point guard (`import.meta.url === pathToFileURL(process.argv[1]).href`) MUST stay in the barrel, NOT cli.ts — moving it to cli.ts breaks `npx tsx src/resilience/response-cache.ts <cmd>` because import.meta.url there ≠ barrel URL.
- sqlite.ts uses `import type { CacheEntry, CacheConfig } from './cache'` to avoid a runtime circular import (cache.ts ↔ sqlite.ts).
- Barrel re-exports are extensionless (repo convention, e.g. src/core/watchtower/index.ts); `.ts` extensions fail tsc without `allowImportingTsExtensions` (tsconfig lacks it).
- semantic.ts exports only the 4 helpers sqlite.ts needs (semTokenize, computeTfIdfVector, getSemEmbeddings, semanticCacheLookup); SEM_STOP_WORDS/cosineSim/SEMANTIC_CACHE_THRESHOLD/MIN_SEMANTIC_INPUT_TOKENS stay private.
- GOTCHA: `npx vitest run tests/unit/response-cache-telemetry.test.ts tests/unit/token-optimization-cache.test.ts` FAILS pre-existing ("No test suite found") — these are node:test files vitest can't collect. Repo's real runner: `node --import tsx --test --test-concurrency=1` → 5/5 pass. Also, running the two files in parallel (default) flakes the LRU test due to shared SQLite DB — must use --test-concurrency=1.
- Pre-existing uncommitted work in tree: src/security/secret-scanner.ts split (F2.2) — not mine, left untouched.

---
*Imported from Engram on 2026-09-06*
