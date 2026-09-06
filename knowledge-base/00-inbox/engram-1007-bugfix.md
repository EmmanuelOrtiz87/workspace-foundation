---
created: 2026-05-22 04:22:40
tags: [engram, bugfix]
engram_id: 1007
type: bugfix
---

# Presentation layout and dashboard export fixes

**What**: Fixed presentation slide layout issues (slides 14/22/25/28) and dashboard PDF/PNG export
**Why**: Content-heavy slides overflowed viewport (100vh) with no scroll; PDF export rendered empty pages because only `.sec.active{display:block}` section was visible; PNG called PDF script with wrong extension
**Where**:
- gentle-vanguard-presentation.html — slides 14,22,25,28 compacted: smaller canvas (240→140-160px), condensed grids, reduced fonts/padding/margins
- gentle-vanguard-presentation.html CSS — added @media print rule: overflow:visible, block layout, hide nav
- scripts/metrics/dashboard-render.ps1 — added @media print rule: .sec{display:block!important} for all sections
- scripts/metrics/metrics-server.ps1 — /api/export/pdf: injects JS to show all sections before browser print; /api/export/png: uses `--screenshot` flag instead of calling PDF script
**Learned**:
- Headless browser --print-to-pdf captures visible DOM only; hidden sections (display:none) don't render
- @media print with !important overrides JS-driven display:none behavior
- Chrome/Edge --screenshot needs --window-size to control viewport size for full-page capture
- Temp HTML files must be cleaned up after export to avoid cluttering temp dir
- Slide layout needs compact sizing for content-heavy slides at 100vh constraint

---
*Imported from Engram on 2026-09-06*
