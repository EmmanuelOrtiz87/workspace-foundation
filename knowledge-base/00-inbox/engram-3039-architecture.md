---
created: 2026-08-24 20:56:24
tags: [engram, architecture]
engram_id: 3039
type: architecture
---

# MCP skill execution boundary

**What**: Added a fail-closed MCP skill command boundary with exact explicit approvals and direct argv execution.
**Why**: Prevent command-bearing `execute_skill` from executing untrusted frontmatter or using `runSyncShell`.
**Where**: scripts/mcp/skill-server.ts, scripts/mcp/skill-execution-policy.ts, config/mcp-execution-policy.json, config/mcp-execution-policy.schema.json, tests/unit/mcp-skill-execution-policy.test.ts
**Learned**: The default policy intentionally has no approvals; approved entries must match the frontmatter command exactly but execute only the policy-provided executable and static args via `runSync`.

---
*Imported from Engram on 2026-09-06*
