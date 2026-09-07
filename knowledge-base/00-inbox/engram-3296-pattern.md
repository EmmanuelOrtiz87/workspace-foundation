---
created: 2026-08-29 17:49:58
tags: [engram, pattern]
engram_id: 3296
type: pattern
---

# CMS quality tests

**What**: Added Vitest workflow, URL/asset security, and static accessibility smoke tests for apps/content-cms, plus a test:quality script.
**Why**: User requested quality coverage without adding a backend or heavy browser dependencies.
**Where**: apps/content-cms/src/workflow.test.ts, security.test.ts, accessibility.test.ts, domain.ts, package.json, README.md
**Learned**: The app package has no DOM/browser test dependencies, so coverage uses domain/state transitions and source-level accessibility assertions; README documents that this is not a substitute for browser/axe testing. Hardened URL validation to require absolute http/https URLs without credentials/control/HTML characters and rejected SVG data URLs.

---
*Imported from Engram on 2026-09-06*
