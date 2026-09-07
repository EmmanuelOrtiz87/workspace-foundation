---
created: 2026-08-24 23:15:27
tags: [engram, architecture]
engram_id: 3076
type: architecture
---

# Observability tenant conversion complete

**What**: Completed migration 011 and tenant-scoped observability for traces, token usage/transactions, alerts, feedback, and response cache; refreshed native embeddings; added CI static deployment/artifact gates; fixed unsafe regex lint and optimized SQLite.
**Why**: Continue the stack plan toward complete data isolation, operational health, and release safety.
**Where**: apps/web-dashboard/server/database/repositories/MigrationRunner.ts, TraceRepo.ts, EventRepo.ts, CacheRepo.ts, SkillRepo.ts, real-data.ts, telemetry-ingest.ts; src/skills/skill-embedder-incremental.ts; src/ci/static-gates.ts; .github/workflows/ci.yml; reports/audits/STACK-END-TO-END-AUDIT-2026-08-24.md
**Learned**: Watchtower is now 96/96 PASS with 0 warnings; root full tests pass 5/5 and dashboard tests 52/52. Static gate correctly warns on three mutable :latest images while generated artifact tracking is clean. Remaining work requires external registry/CNI/runtime facts or explicit ownership policy: filesystem provenance, backlog/routing/skill usage scoping, signed image promotion, NetworkPolicy, and OS/container MCP sandbox.

---
*Imported from Engram on 2026-09-06*
