---
created: 2026-08-24 23:42:51
tags: [engram, architecture]
engram_id: 3081
type: architecture
---

# Dashboard filesystem provenance classification

**What**: Added a Zod-backed dashboard source classification contract and provenance metadata on real-data DashboardData, traces, and cloud responses. Legacy filesystem fallbacks are explicitly marked system-wide/unprovenanced; tenant filesystem data requires explicit tenantId metadata, and mismatched/global sources are rejected by an assertion helper.
**Why**: Prevent historical/global runtime files from being presented as deployment-tenant data without evidence.
**Where**: apps/web-dashboard/server/dashboard-source-provenance.ts, apps/web-dashboard/server/real-data.ts, apps/web-dashboard/src/types/dashboard.ts, tests/unit/dashboard-source-provenance.test.ts
**Learned**: Root typecheck/lint and focused provenance tests pass. Dashboard app build remains blocked by four pre-existing websocket-server TypeScript errors unrelated to this slice; the existing real-data file also contains unrelated uncommitted formatting changes, so it was not mass-reformatted.

---
*Imported from Engram on 2026-09-06*
