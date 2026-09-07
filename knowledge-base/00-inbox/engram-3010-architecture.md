---
created: 2026-08-24 12:27:31
tags: [engram, architecture]
engram_id: 3010
type: architecture
---

# MCP lifecycle policy: essential versus on-demand servers

**What**: Auditoría MCP end-to-end: el stack MCP operativo pasa `npm run mcp:test` (MCP JS/TS existen, compila, tools/list responde 5 tools) y `/api/health` reporta mcp=ok/tools=5. `opencode.json` y `.zcode/config.json` tienen codegraph, engram, chrome-devtools, filesystem y memory habilitados. El endpoint dashboard `/api/mesh` muestra errores para skill-server/engram-mcp/lsp-server porque infiere salud desde PID files `.runtime/mcp/*.pid`, que son stale/no representan necesariamente conexiones stdio del host OpenCode/ZCode.
**Why**: El usuario pidió saber si todos los MCP deben estar activos, su fundamento, pros/contras y política operativa.
**Where**: opencode.json, .zcode/config.json, config/mcp-registry.json, apps/web-dashboard/server/mesh-api.ts, src/core/health-check.ts
**Learned**: MCP tiene capas distintas: configuración enabled ≠ proceso persistente ≠ conexión activa del host. Engram es esencial para memoria; codegraph y skill-server/lsp son core durante desarrollo; filesystem, chrome-devtools, fetch y sequential-thinking son capacidades bajo demanda; `memory` MCP es potencialmente redundante con Engram y debe elegirse una única fuente de verdad. No usar `/api/mesh` como autoridad para stdio MCP: necesita modelo host-managed/unknown o handshake real, no PID heuristics. Política recomendada: always-on solo Engram + codegraph/skill-server si el flujo los usa; on-demand para filesystem/chrome/fetch/sequential; restringir filesystem a menor raíz posible. Validación actual: mcp:test ALL PASS, tools=5, dashboard health mcp ok.

---
*Imported from Engram on 2026-09-06*
