---
created: 2026-05-18 23:24:58
tags: [engram, architecture]
engram_id: 951
type: architecture
---

# Session autostart pipeline: codegraph-sync as step 16

**What**: Added codegraph-sync as step 16 in session-autostart.config.json pipeline
**Why**: CodeGraph index could be stale at session start (file watcher only syncs every 2 seconds during active sessions, not between sessions)
**Where**: config/session-autostart.config.json, scripts/utilities/codegraph-sync-autostart.ps1
**Learned**: The autostart pipeline is config-driven (reads steps from session-autostart.config.json). New steps are added by appending to the pipeline.steps array. Each step has id, enabled, script (relative path), args, required, description. The pipeline runs sequentially and reports failures at the end.

---
*Imported from Engram on 2026-09-06*
