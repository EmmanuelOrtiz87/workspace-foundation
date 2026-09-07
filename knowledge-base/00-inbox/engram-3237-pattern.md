---
created: 2026-08-29 07:18:03
tags: [engram, pattern]
engram_id: 3237
type: pattern
---

# F2.5 split token-ingest.ts into per-domain modules

**What**: Split `src/tokens/token-ingest.ts` (1119 lines) into a thin 49-line entry + `src/tokens/token-ingest/` module directory (readers.ts 465, nexus.ts 344, ingest.ts 286, index.ts 3). Mechanical refactor, zero behavior changes.
**Why**: F2.5 refactor task — per-domain module separation for the token ingest daemon.
**Where**: src/tokens/token-ingest.ts (entry), src/tokens/token-ingest/{readers,nexus,ingest,index}.ts
**Learned**: (1) The file is invoked ONLY by path string (package.json scripts + process-hygiene matcher `/token-ingest\.ts.*--watch/`), so the entry path must stay `src/tokens/token-ingest.ts`. (2) Cross-module use required exporting previously-private helpers (`opencodeDbPath`, `SessionUsage`, `zcodeRolloutDir`, `codexSessionsDir`, `minimaxDbPath`, `TransactionUsage`, `lastIngested`, `saveLastIngested`, `updateStackSession`, `writeObservabilityReport`, `log`, `RUNTIME_DIR`, `NEXUS_DB`, etc.) — index.ts re-exports via `export *`. (3) Relative import depth changed: nexus.ts needs `../../../apps/web-dashboard/...` (was `../../apps/...` from src/tokens/) and ingest.ts needs `../../core/session-metrics-tracker` (was `../core/...`). (4) Entry keeps `main()` + `import.meta.url === pathToFileURL(process.argv[1]).href` guard verbatim with `.catch` (no-floating-promises). (5) All verification passed: tsc --noEmit 0, eslint 0, prettier 0, runtime probe ok, CLI --once/--report exit 0 with real data.

---
*Imported from Engram on 2026-09-06*
