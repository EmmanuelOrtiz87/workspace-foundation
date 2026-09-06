---
created: 2026-06-06 19:47:00
tags: [engram, bugfix]
engram_id: 1349
type: bugfix
---

# Dashboard WebSocket + InteractiveDocs fixes

**What**: Fixed 4 dashboard bugs: WebSocket not connecting, Timeline empty, Docs buttons dead, metrics not updating

**Why**: Dashboard had no backend server startup — `package.json` only ran `vite`. InteractiveDocs "Try It" and "View Code" buttons had no onClick handlers.

**Where**: apps/web-dashboard/package.json — added dev:server, dev:client, updated dev to concurrently run both vite + tsx server. apps/web-dashboard/vite.config.ts — added ws: true to /api proxy. apps/web-dashboard/src/components/InteractiveDocs.tsx — added toast state, handleTryIt (clipboard copy), handleViewCode handlers, onClick on both buttons.

**Learned**: npm 11.15.0 has an arborist bug (Cannot read properties of null reading 'matches') with recharts. Must use pnpm in this monorepo. The WebSocket server (websocket-server.ts) imports .js extensions — tsx handles this correctly with ESM. concurrently -n client,server -c cyan,yellow provides nice colored prefixes for multi-process dev.

---
*Imported from Engram on 2026-09-06*
