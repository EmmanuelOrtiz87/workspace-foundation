---
created: 2026-08-31 15:56:13
tags: [engram, pattern]
engram_id: 3491
type: pattern
---

# CMS GV visual normalization

**What**: Normalized apps/content-cms to Gentle-Vanguard visual tokens, added lucide-react iconography, branded typography, control/card/status styling, and Spanish document metadata.
**Why**: User requested a surgical off-brand restyle without behavior or domain changes.
**Where**: apps/content-cms/src/styles.css, src/App.tsx, src/contentos.tsx, index.html, package.json, pnpm-lock.yaml
**Learned**: CMS quality gates pass after using official token values; existing test suite remains 40/40. Chrome headless dump-dom returned empty output in this Windows environment despite CMS HTTP 200 and widget script present in the served HTML.

---
*Imported from Engram on 2026-09-06*
