---
created: 2026-08-29 17:30:19
tags: [engram, architecture]
engram_id: 3286
type: architecture
---

# Completed local CMS lifecycle

**What**: Completed apps/content-cms with immutable content versions, local rollback, schema-versioned JSON import/export, secure raster asset metadata handling, and auditable local publish events.
**Why**: User requested a backend-independent CMS completion while preserving identity and responsive behavior.
**Where**: apps/content-cms/src/domain.ts, src/storage.ts, src/App.tsx, src/domain.test.ts, src/styles.css, README.md
**Learned**: Schema 2 imports are strict envelopes; SVG and unsafe asset references are rejected; rollback creates a new version rather than mutating history; published saves create audit events.

---
*Imported from Engram on 2026-09-06*
