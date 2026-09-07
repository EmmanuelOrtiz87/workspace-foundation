---
created: 2026-08-29 07:11:18
tags: [engram, architecture]
engram_id: 3235
type: architecture
---

# F2.5 secret-scanner + response-cache + session-close splits

**What**: Split 3 src/ giants into per-domain modules with barrels: secret-scanner (1424→40 barrel, modules: patterns 744/config 161/entropy 20/ignore 91/scanner 341/report 44), response-cache (1213→31 barrel, modules: semantic 234/sqlite 337/telemetry 108/cache 342/cli 186), session-close-orchestrator (1240→33 entry, modules: helpers 123/process 95/phases 816/index 205). Commits ccef16e0, b379a218, c364a832. Also fixed .gitignore session/→/session/ (commit 3a56039e).
**Why**: F2.5 acceptance = no file >800 lines.
**Where**: src/security/secret-scanner/, src/resilience/response-cache/, src/session/session-close/, .gitignore
**Learned**: (1) CRITICAL: .gitignore line 84 had unanchored `session/` matching src/session/ at any depth — silently excluded from git AND prettier (prettier v3 uses .gitignore). Fixed to `/session/` (top-level only). Also un-ignored scripts/utilities/session/session-autostart.cmd (legit shim) and deleted stray 1-byte SESSION-MANAGEMENT. (2) vitest CANNOT collect node:test files ("No test suite found") — the repo's real runner is `node --import tsx --test --test-concurrency=1 <file>`. (3) TS5097: `.ts` import specifiers fail unless allowImportingTsExtensions (requires noEmit, breaks build:mcp) → use `.js` specifiers (resolve to .ts under moduleResolution bundler + tsx). (4) CLI entry-point guard (`import.meta.url === pathToFileURL(process.argv[1]).href`) must stay in the barrel/entry file, not the cli module — import.meta.url differs. (5) `import type` avoids runtime circular imports (cache.ts ↔ sqlite.ts). (6) session-close-orchestrator has NO importers — invoked by path string from session-orchestrator.ts:122 + cli/stack.ts:160 → keep thin entry at same path. (7) Parallel subagents cause transient tsc errors during concurrent edits — final combined tsc is what matters.

---
*Imported from Engram on 2026-09-06*
