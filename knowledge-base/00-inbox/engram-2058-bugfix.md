---
created: 2026-07-27 05:36:10
tags: [engram, bugfix]
engram_id: 2058
type: bugfix
---

# opencode.json must not have mcpServers property

**What**: Removed `mcpServers` property from opencode.json because OpenCode rejects unknown properties at startup. Moved LSP MCP config to `config/mcp-registry.json` instead.

**Why**: session-autostart's `opencode-config-validate` step was failing because OpenCode doesn't recognize `mcpServers` at the root level of opencode.json. The MCP gateway (`src/mcp/mcp-gateway.ts`) reads from `config/mcp-registry.json` and handles auto-starting servers.

**Where**: opencode.json (removed mcpServers section), config/mcp-registry.json (lsp-server entry already present)

**Learned**: OpenCode AI tool rejects properties it doesn't recognize in opencode.json. Keep only standard properties in opencode.json; use `config/mcp-registry.json` for MCP server definitions.

---
*Imported from Engram on 2026-09-06*
