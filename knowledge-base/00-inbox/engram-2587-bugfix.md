---
created: 2026-08-06 11:41:57
tags: [engram, bugfix]
engram_id: 2587
type: bugfix
---

# Temp file registry init + autostart race

**What**: Created `.session/temp-file-registry.json` with initial empty structure `{version:1, lastUpdated:"2026-08-06T11:40:00.000Z", entries:[]}` and verified via `npx tsx src/temp-file-registry.ts --list` (outputs "No entries found" — correct for empty registry). Note: `loadRegistry()` returns a fallback empty registry when the file is missing, so "No entries found" alone doesn't prove the file exists.

**Why**: User requested the initial registry file for the temp-file-registry system (tracks lifecycle of temp files: temporary → authorized-pending → permanent).

**Where**: `.session/temp-file-registry.json`, `src/temp-file-registry.ts`

**Learned**: First write to `.session/temp-file-registry.json` disappeared — the file was deleted by a transient race with the still-running background `session-autostart` pipeline (launched via `npm run session:autostart:detached` at session start), which includes a session-cleanup phase that resets `.session` state. Files created in `.session` during the autostart pipeline's cleanup window can be wiped. Solution: wait for the pipeline to finish or recreate the file afterwards; it persists stably once the pipeline's cleanup phase has completed.

---
*Imported from Engram on 2026-09-06*
