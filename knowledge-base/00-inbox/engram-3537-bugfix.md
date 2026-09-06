---
created: 2026-08-31 19:36:12
tags: [engram, bugfix]
engram_id: 3537
type: bugfix
---

# Command Center topbar and incremental polling

**What**: Fixed Command Center shell consistency and polling flicker. Added GET /gv-design-system.css, canonical gv-topbar markup/classes, and incremental card updates with snapshot early-return and cardNodes Map.
**Why**: The local topbar styles conflicted with the shared design system, and polling replaced #apps.innerHTML every 5 seconds.
**Where**: apps/command-center/server.ts, apps/command-center/public/index.html, assets/gv-design-system.css; screenshot evidence at .runtime/ui-shots/cc-after.png
**Learned**: The shared CSS needed canonical gv-mark/gv-wordmark styles for the requested markup; the server route accepts the repo root explicitly so custom-root server instances resolve the asset correctly.

---
*Imported from Engram on 2026-09-06*
