---
created: 2026-08-19 02:02:59
tags: [engram, architecture]
engram_id: 2880
type: architecture
---

# COE→CMS integration: Content Ops section in marketing CMS

**What**: Integrated the Content Operations Engine (COE) into the marketing CMS (docs/presentations/resources-index.html). Added a "Content Ops" section with a 21-job kanban (GROWTH-EXPERIMENT-001 calendar), state transitions (DRAFT→VALIDATED→PACKAGED→REVIEW→APPROVED→PUBLISHED→MEASURED, FAILED→DRAFT recovery), filters by platform/status/campaign, detail modal, and manifest export.
**Why**: The CMS (resources-index.html, "Gentle-Vanguard CMS - Panel de Control de Marketing") existed as a 100% local HTML app using localStorage, but was disconnected from the COE engine (src/content-operations/) that manages the real 21-job manifest (content/operations/master-manifest.json). User chose to integrate COE into the existing CMS.
**Where**: docs/presentations/resources-index.html (+26 lines: nav-item "Content Ops", section id="content-ops", script tags), docs/presentations/assets/js/coe-cms.js (new, 396 lines, COECMS class), docs/presentations/assets/js/coe-manifest.js (new, window.COE_MANIFEST embedded), src/sync-to-public.ts (+2 lines: added docs/presentations to public sync list).
**Learned**: (1) The CMS is file:// so fetch() fails — solution: embed the manifest as window.COE_MANIFEST in a JS file generated from the source JSON (verified integrity 21/21 jobs). (2) State overrides persist in localStorage (key 'gentleVanguardCOE') and merge over the embedded base on load — survives reloads in file://. (3) sync-to-public.ts only copies specific docs/ subdirs (getting-started, guides, marketing, supplementary) — docs/presentations was excluded, so the CMS never reached the public repo until added. (4) The public repo sync uses C:\Workspace_local\gentle-vanguard-public (default), not a temp clone. Commits: 777f29ba (CMS integration), ddf2c242 (sync-public include), public 51ce018a.

---
*Imported from Engram on 2026-09-06*
