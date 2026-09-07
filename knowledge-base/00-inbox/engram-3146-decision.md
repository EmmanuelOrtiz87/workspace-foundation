---
created: 2026-08-25 13:43:07
tags: [engram, decision]
engram_id: 3146
type: decision
---

# Explicit filesystem dashboard provenance

**What**: Added shared system-wide filesystem metadata to the four filesystem/mixed source classifications in real-data.ts.
**Why**: Make provenance explicit without assigning global filesystem data to a deployment tenant; existing database paths retain tenantId propagation.
**Where**: apps/web-dashboard/server/real-data.ts
**Learned**: dashboard-source-provenance.ts treats `{ scope: 'system-wide' }` metadata as explicit system-wide provenance; omitted metadata remains unprovenanced.

---
*Imported from Engram on 2026-09-06*
