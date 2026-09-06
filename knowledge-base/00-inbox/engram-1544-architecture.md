---
created: 2026-07-11 01:08:55
tags: [engram, architecture]
engram_id: 1544
type: architecture
---

# Wave 4: engram-integrity + mcp-gateway TS + watchtower fixes

**What**: Completed Wave 4 TypeScript migrations (engram-integrity-check, mcp-gateway) and fixed broken watchtower references + dead code cleanup.

**Why**: engram-integrity-check.ps1 was the last core memory integrity script in PS1 (303 lines, 5-point check). mcp-gateway.ps1 managed MCP server lifecycle with fragile PID file tracking. Watchtower still referenced 3 PS1 files that had been migrated to TS.

**Where**:
- New TS files: src/engram-integrity-check.ts (303 lines, native crypto SHA256), src/mcp-gateway.ts (205 lines, clean process spawn)
- Watchtower fixes: 3 references updated (session-cleanup-start, audit-pipeline, mcp-gateway → TS)
- Dead code: removed semantic-compression.ps1 ref from session-cleanup-start.ts, cache-warmer.ps1 ref from correction-rules-engine.ts
- Config updates: session-autostart.config.json (2 steps → TS)
- Removed: 2 PS1 originals (engram-integrity-check.ps1, mcp-gateway.ps1)
- Updated: ps1-ts-migration.json to v5.0.0 (16 TS files, Wave 1-4 complete)

**Learned**:
- 16 TS files now in src/ covering the full pipeline core (from 14 in Wave 3)
- 39 PS1 scripts still in session-autostart.config.json — mostly lazy/background scripts (lower priority)
- The watchtower's file-existence checks are just guards — they don't execute the PS1 scripts
- session-autostart.ts is a clean generic dispatcher (186 lines) — it doesn't need migration, just the scripts it references
- Remaining PS1 scripts are mostly utility/adapter scripts that interface with external tools (MCP bridge, adaptive profiles, etc.)

---
*Imported from Engram on 2026-09-06*
