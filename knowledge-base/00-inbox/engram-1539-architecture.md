---
created: 2026-07-11 00:58:32
tags: [engram, architecture]
engram_id: 1539
type: architecture
---

# Wave 3: 3 TS migrations + 11 dead reference fixes

**What**: Completed Wave 3 TypeScript migrations (tracing-instrument, event-sourcing, saga-orchestrator) and fixed 11 dead PS1 references across the Gentle-Vanguard stack.

**Why**: 11 PS1 scripts were referenced by configs/TS but didn't exist on disk (pre-compact-hook, token-guard, artifact-naming, team-mode, tms-mcp-bridge, old ml/* paths). The 3 Wave 3 PS1 scripts needed TS migration for native bigint timestamps, JSONL event store, and saga pattern consistency.

**Where**:
- New TS files: src/tracing-instrument.ts (371 lines), src/event-sourcing.ts, src/saga-orchestrator.ts
- Config fixes: orchestrator.json (4 dead refs removed), health-check.ts (2 path fixes + 1 dead check removed)
- Config updates: session-autostart.config.json (2 steps → TS), maintenance-watchtower.ts (1 check → TS), session-cleanup-start.ts (2 calls → TS)
- Removed: 3 PS1 originals (tracing-instrument.ps1, event-sourcing.ps1, saga-orchestrator.ps1)
- Updated: ps1-ts-migration.json to v4.0.0 (14 TS files, Wave 1+2+3 complete)

**Learned**:
- session-autostart spawns TS via `npx tsx` and PS1 via `pwsh -NoProfile -File` — eliminating PS1 for core pipeline saves ~300-500ms per invocation
- bigint nanosecond timestamps require careful handling in TS (cannot mix number and bigint) — stored as strings in JSON
- saga-orchestrator.ts uses checkpoint-manager.ts (TS) directly instead of PS1 for checkpoint steps
- event-sourcing.ts projections use ?? operator for null coalescing (cleaner than PS1 ternary)
- 14 TS files now in src/ covering the full pipeline core (from 8 in Wave 1)
- Remaining nextWave: session-autostart, engram-integrity-check (lower priority)

---
*Imported from Engram on 2026-09-06*
