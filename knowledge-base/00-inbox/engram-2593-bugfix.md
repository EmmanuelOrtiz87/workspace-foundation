---
created: 2026-08-06 18:40:41
tags: [engram, bugfix]
engram_id: 2593
type: bugfix
---

# Stack validation 100%: 4 fixes (db-health, MCP input, codegraph MCP config, lint cleanup)

**What**: Completed exhaustive stack validation of Gentle-Vanguard, fixing 4 bugs to reach 100% operational status (watchtower 85/85 PASS, health ALL PASS, lint 0, typecheck 0, dashboard build OK).

**Why**: User demanded the stack operate with all tools available; validation was at 67/100 with multiple FAILs.

**Where**: scripts/database/db-health.ts, src/core/health-check.ts, src/core/maintenance-watchtower.ts, src/codegraph-mcp-server-start.ts, apps/web-dashboard/server/global-health-api.ts, apps/web-dashboard/server/mcp-gateway-api.ts, + 33 src/ files (lint cleanup)

**Learned**:
1. **cmd.exe quote mangling**: `runSyncShell` on Windows uses `cmd.exe /d /s /c` which mangles nested quotes — `sqlite3 "C:\...\db" "PRAGMA..."` reaches sqlite3 as `\ C:\...` and fails. NEVER use runSyncShell with nested quotes for CLIs; use `runSync` with direct argv arrays, or better, use better-sqlite3 directly.
2. **MCP health check input**: `src/core/health-check.ts` built JSON-RPC input but never passed it via `runSync`'s `input` option — the MCP server read EOF on stdin and returned 0 tools. Fix: add `input` to runSync options (SpawnSyncOptions supports it).
3. **CodeGraph is an on-demand stdio MCP server** configured in opencode.json (`command: "codegraph serve --mcp"`), NOT a persistent daemon. opencode spawns it lazily. The watchtower check was legacy (expected persistent TCP daemon on port 3000). Fix: watchtower now recognizes the MCP config in opencode.json as valid architecture. A stdio MCP server dies when stdin closes (EOF), so `stdio: 'ignore'` in auto-heal kills it.
4. **codegraph-mcp-server-start.ts**: spawning the `.cmd` shim with `shell: true` writes the shim PID (which dies) to the PID file. Fix: resolve the real JS entry (`@colbymchenry/codegraph/dist/bin/codegraph.js` at `%APPDATA%\npm\node_modules`) and spawn `node <entry> serve --mcp` directly. Note: `runSync('npm', ...)` fails on Windows (npm.cmd shim EINVAL) — compute global path from APPDATA instead.
5. **Prettier**: 350 files have formatting debt but prettier is NOT a CI gate (CI runs lint+typecheck+test+build+audit). Reformatting 350 files would create a massive diff obscuring real fixes — left as known debt.
6. **runNpxTsxSync signature**: `runNpxTsxSync(script, scriptArgs: string[] = [], options)` — passing options as 2nd arg (string[]) causes TS2353.

**Where**: All fixes verified: watchtower 85/85 PASS, health ALL PASS, lint 0 errors, typecheck 0 errors, dashboard build OK, db:health HEALTHY (21 tables, 1331 rows, 7 migrations).

---
*Imported from Engram on 2026-09-06*
