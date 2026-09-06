---
created: 2026-06-02 16:08:30
tags: [engram, architecture]
engram_id: 1292
type: architecture
---

# MCP Bridge — multi-tool skill server integration

**What**: Created MCP bridge system connecting 3 tools (cursor, windsurf, cline) to the gentle-vanguard MCP skill server. Each tool's config.json has mcpServers block pointing to dist/scripts/mcp/skill-server.js. Created scripts/mcp-bridge/mcp-bridge.ps1 with 4 actions (status/setup/verify/launch) and automatic tool detection. Updated config/orchestrator.json tool profiles with mcpBridge field.
**Why**: Multi-tool workspace (opencode + cursor + windsurf + cline) needs unified skill access. Opencode uses native skill tools, others need MCP protocol.
**Where**: .cursor/config.json, .windsurf/config.json, .cline/config.json (mcpServers blocks), config/orchestrator.json (tool profiles), scripts/mcp-bridge/mcp-bridge.ps1 (137 lines)
**Learned**: Opencode uses native skillTool (not MCP) so verify must not flag it. Each tool config has different structure — cursor/windsurf use config.json, opencode uses CLAUDE.md.

---
*Imported from Engram on 2026-09-06*
