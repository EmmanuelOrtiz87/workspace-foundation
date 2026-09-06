---
created: 2026-08-31 02:15:35
tags: [engram, bugfix]
engram_id: 3419
type: bugfix
---

# E2E closeWebSocket race + @gentle-vanguard/core en CI

**What**: Dos causas de fallo E2E/Coverage en CI: (1) `closeWebSocket()` en tests/e2e/dashboard-auth-flow.test.ts resolvía por timeout de 1s sin garantizar CLOSED → readyState quedaba CLOSING (2) en vez de CLOSED (3), fallando `assert.strictEqual(ws.readyState, WebSocket.CLOSED)` con `2 !== 3`. Fix: `ws.terminate()` tras el timeout de 1s → 14/14 PASS local. (2) El server moría al arrancar con `ERR_MODULE_NOT_FOUND: Cannot find package '@gentle-vanguard/core' imported from apps/web-dashboard/server/mcp-bridge.ts` — el hook before fallaba en <1s (hookFailed). Fix: paquete workspace real en src/core (package.json + pnpm-workspace.yaml + dep workspace:* en web-dashboard) que crea el junction vía pnpm install.
**Why**: Los jobs Test/Coverage y Test/E2E fallaban en CI.
**Where**: tests/e2e/dashboard-auth-flow.test.ts (closeWebSocket), src/core/package.json (nuevo), pnpm-workspace.yaml, apps/web-dashboard/package.json
**Learned**: El server WS no completa el close handshake en 1s en CI — terminate() es el respaldo determinista. El hack de bootstrap-symlink.ts (solo existía vía autostart local) no funcionaba en CI — un workspace package es la solución nativa.

---
*Imported from Engram on 2026-09-06*
