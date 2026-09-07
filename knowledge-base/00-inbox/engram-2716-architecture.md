---
created: 2026-08-09 22:00:20
tags: [engram, architecture]
engram_id: 2716
type: architecture
---

# Dashboard offline mode with localStorage cache

**What**: Implemented offline mode for the Gentle-Vanguard web dashboard. Created `apps/web-dashboard/src/lib/offlineCache.ts` with per-key localStorage cache (`readCached<T>`, `writeCached<T>` with ~200KB cap, `isStale(cachedAt, maxAgeMs=300000)`), all wrapped in try/catch. Keys are prefixed `gv-dash-cache:` with a version field.

**Why**: Dashboard had no local cache — if `/api/metrics` failed, the UI showed empty data. Now the last successful response per endpoint is cached and served back offline.

**Where**: apps/web-dashboard/src/lib/offlineCache.ts (new), hooks/useMetrics.ts, components/Dashboard.tsx, components/TracingDashboard.tsx, hooks/useAlerts.ts.

**Learned**:
- `useMetrics.ts` now exposes `isOffline: boolean` and `lastUpdated: number` (plus existing `offlineMode`). Cache key is `metrics:<tenantId|'default'>`. Success → writeCached + isOffline=false; failure → readCached + isOffline=true. Legacy single-key `offline-storage.ts` kept as fallback (loadOfflineCache).
- Dashboard shows an amber banner "Offline mode — showing cached data from Xs ago" below header. TracingDashboard caches `/api/traces` and shows its own amber strip. `useAlerts.ts` seeds alerts from cache and writes on WS `alerts` message.
- WS flow unaffected: when server responds, `setIsOffline(false)` keeps real-time data.
- Build verified: `npm run build` (tsc + vite) and root `npm run typecheck` both exit 0.

---
*Imported from Engram on 2026-09-06*
