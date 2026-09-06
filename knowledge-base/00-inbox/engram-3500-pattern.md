---
created: 2026-08-31 16:51:48
tags: [engram, pattern]
engram_id: 3500
type: pattern
---

# Academy GV branding normalization

**What**: Normalized Academy branding to official GV color and typography tokens; Prompt Studio required no changes because listed near-miss hexes were absent.
**Why**: User requested brand token normalization without structural or functional changes.
**Where**: apps/academy-web/style.css, index.html, app.js, assets/logo.svg, assets/logo-horizontal.svg
**Learned**: Academy SVG diagrams and logo assets carried the off-brand palette too, so inventory must include SVG and dynamic JS. CSS RGB channels were centralized in custom properties for translucent effects. Prompt Studio build passed unchanged.

---
*Imported from Engram on 2026-09-06*
