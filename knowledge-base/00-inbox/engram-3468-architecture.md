---
created: 2026-08-31 12:08:00
tags: [engram, architecture]
engram_id: 3468
type: architecture
---

# Apps Control Panel implementation

**What**: Implemented the Apps Control Panel API/UI for dashboard, analytics, CMS, and academy with idempotent process start/stop, pidfiles, TCP probes, hidden Windows-safe spawns, polling UI, i18n, and dashboard session-close persistence.
**Why**: User requested on-demand app lifecycle control without touching the rest of the stack.
**Where**: apps/web-dashboard/server/apps-control-api.ts, apps/web-dashboard/server/websocket-server.ts, apps/web-dashboard/src/components/AppsControlPanel.tsx, apps/web-dashboard/src/App.tsx, apps/web-dashboard/src/i18n/ui-strings.ts, src/session/session-close/process.ts, src/session/session-close/phases.ts.
**Learned**: dashboard-ports.json uses `wsPort`, not `ws`; real server smoke was blocked by pre-existing ESM resolution failure for `@gentle-vanguard/core/run-command.js.ts` when launching websocket-server directly. Dashboard API routes inherit global auth/RBAC.

---
*Imported from Engram on 2026-09-06*
