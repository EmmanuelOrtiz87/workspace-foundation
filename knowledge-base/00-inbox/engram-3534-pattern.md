---
created: 2026-08-31 19:23:18
tags: [engram, pattern]
engram_id: 3534
type: pattern
---

# Dashboard GV header visual alignment

**What**: Aligned the web dashboard shell header with the Gentle-Vanguard app pattern: Gv gradient mark, GentleVanguard wordmark with Dashboard label, flat icon tabs, visible dark grid/glows, and Stack Operations footer.
**Why**: The dashboard header was the remaining visual outlier and its atmosphere was hidden by opaque shell/main backgrounds.
**Where**: apps/web-dashboard/src/App.tsx, apps/web-dashboard/src/styles/index.css; verification screenshot at .runtime/ui-shots/dashboard-after.png
**Learned**: The grid/glow elements already existed but were covered by opaque shell/main backgrounds; making those layers transparent in dark mode exposes the fixed 48px grid and radial glows. Groups were retained in data but labels were removed for the single-row analytics-style tab treatment.

---
*Imported from Engram on 2026-09-06*
