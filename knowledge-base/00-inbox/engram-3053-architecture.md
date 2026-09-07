---
created: 2026-08-24 21:36:26
tags: [engram, architecture]
engram_id: 3053
type: architecture
---

# Tenant isolation migration design

**What**: Designed a minimal implementation-ready tenant isolation slice for dashboard auth plus metric_snapshots, sessions, and events, preserving existing SQLite data via a default tenant backfill.
**Why**: Establish fail-closed tenant scoping without editing during the design request.
**Where**: apps/web-dashboard/server/auth.ts, websocket-server.ts, database/repositories/MigrationRunner.ts, MetricsRepo.ts, SessionRepo.ts, EventRepo.ts, metrics-writer.ts, shared-state-bridge.ts.
**Learned**: Current auth is process-memory opaque-cookie auth with no principal identity; /api/metrics accepts an untrusted tenantId query and existing repositories query globally. A migration should add tenants/principals/memberships/auth_sessions and tenant_id columns/default indexes, assign legacy rows to a default tenant, derive tenant context from authenticated session (never arbitrary query), and leave traces/alerts/feedback/cache/skills/token/routing/scoring/errors/backlog out of the first slice until their ownership is defined.

---
*Imported from Engram on 2026-09-06*
