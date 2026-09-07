---
created: 2026-08-24 21:54:51
tags: [engram, architecture]
engram_id: 3066
type: architecture
---

# MCP restricted execution worker

**What**: Added a dedicated MCP execution worker boundary that launches approved commands via direct argv with shell:false, Windows windowsHide, minimal environment, isolated temporary workspace, bounded timeout/output, and restricted baseline fail-closed behavior for network or broad filesystem requests.
**Why**: Enable a minimal safe execution path without enabling any command by default.
**Where**: scripts/mcp/execution-worker.ts, scripts/mcp/skill-server.ts, scripts/mcp/skill-execution-policy.ts, config/mcp-execution-policy.json, config/mcp-execution-policy.schema.json, tests/unit/mcp-skill-execution-policy.test.ts
**Learned**: The empty policy includes a $schema field, so runtime Zod validation must allow it; source-mode worker launch needs the tsx loader because tests execute TypeScript directly.

---
*Imported from Engram on 2026-09-06*
