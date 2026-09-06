---
created: 2026-08-24 20:10:51
tags: [engram, architecture]
engram_id: 3032
type: architecture
---

# End-to-end stack audit 2026-08-24

**What**: Completed an end-to-end stack audit and applied targeted fixes for atomic process locks, tsx loader resolution, MCP gateway argument/error handling, WebSocket token handshake authorization, transactional SQLite housekeeping, workflow directory linting, and broken documentation references.
**Why**: Assess health, scalability, stability, integration, security, documentation, hygiene, and token telemetry.
**Where**: apps/web-dashboard/server/mcp-gateway-api.ts; apps/web-dashboard/server/websocket-server.ts; apps/web-dashboard/server/database/repositories/HousekeepingRepo.ts; src/core/process-lock-manager.ts; src/core/run-command.ts; src/workflow-lint.ts; README-PUBLIC.md; docs/guides; skills/knowledge-base; reports/audits/STACK-END-TO-END-AUDIT-2026-08-24.md
**Learned**: Watchtower is 94/96 PASS with 2 warnings (stale embeddings and unhealthy Gemini provider), DB integrity is healthy, full tests/build/typecheck/lint pass after fixes. Do not approve production exposure until fail-closed dashboard auth, authenticated tenant isolation, MCP command sandboxing, request/WS resource limits, and operational persistence hardening are implemented. Daily token telemetry reports 224% shared budget while current session reports 75 tokens, so aggregation needs reconciliation.

---
*Imported from Engram on 2026-09-06*
