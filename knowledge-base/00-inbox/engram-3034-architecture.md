---
created: 2026-08-24 20:52:36
tags: [engram, architecture]
engram_id: 3034
type: architecture
---

# MCP skill execution security gap

**What**: Completed read-only architecture/security inspection for MCP skill command execution.
**Why**: User requested a minimal secure design with allowlist, signed approval, sandbox, and HITL, without edits.
**Where**: scripts/mcp/skill-server.ts, src/core/run-command.ts, apps/web-dashboard/server/websocket-server.ts, src/autonomous-review/receipt-manager.ts, config/skill-mcp.json, config/mcp-registry.json, config/mcp-lifecycle-policy.json, config/rbac-policy.json, config/security-hardening.json, tests/unit/mcp/skill-server.test.ts.
**Learned**: execute_skill parses command/run/script from SKILL.md frontmatter and passes the raw string to runSyncShell, with inherited environment and no authorization, signature, sandbox, or effective HITL. Dashboard HITL is keyword/demo-driven and hitl_response is not bound to a pending request/authorized approver. ReceiptManager signatures are only truncated SHA-256 hashes over mutable in-memory decisions, not cryptographic signatures. Existing event-sourcing hash chain, RBAC/HITL policy, hidden process runner, and dashboard WS auth can be reused, but need a dedicated execution policy gate and persistent approval records. Safe default is deny all command-bearing skills until signed manifest + policy allowlist + verified approval; docs-only skills remain non-executing.

---
*Imported from Engram on 2026-09-06*
