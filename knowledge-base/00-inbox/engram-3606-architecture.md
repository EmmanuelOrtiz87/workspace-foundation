---
created: 2026-09-02 01:30:08
tags: [engram, architecture]
engram_id: 3606
type: architecture
---

# Design Hub Labs reorg + official logo + UI kit

**What**: Reorganized design-hub app: decision tools moved to src/labs/ (visual-comparison, compare-v1-v2-v3, v3-showcase) with fixed relative paths (../../public → ../../../public); shell.js has no Labs tab, only a discreet footer link; labs index carries Experiments + Decision 2026-09-01 banners. Official logos (logo.svg, logo-icon.svg, mono) copied from repo assets/ to public/assets/ and swapped into all hub pages/docs/tools (v2/v3 kept in public/assets for labs). Added src/scripts/ui-kit.js + src/styles/ui-kit.css (DHUI: modals with focus trap/Esc/overlay-cancel + type-to-confirm, stacking toasts 3.5s, dhk-btn primary/secondary/ghost/danger). Token Editor rebuilt around pending/saved/overrides state with sticky CRUD bar, Ctrl+S/Esc, beforeunload, session history entries (restore/delete/export session). Asset Generator: official kit + Download/Copy SVG/Regenerate + overwrite confirm. Components: Copy + View code modal.
**Why**: Brand decision 2026-09-01 (v2 Premium + v1 monogram logo); owner moved comparators out of permanent scope; UX parity with design tools.
**Where**: apps/design-hub/{index.html, src/labs/*, src/scripts/{shell,ui-kit}.js, src/styles/ui-kit.css, src/tokens-editor, src/asset-generator, src/components, tools/validate.js, README.md}
**Learned**: shell.js derives app root from its own script src — labs pages at depth 3 need ../../scripts/shell.js; validate.js needed to check LABS+suffix concatenation, not full literals. Server: python http.server 8095 must stay running.

---
*Imported from Engram on 2026-09-06*
