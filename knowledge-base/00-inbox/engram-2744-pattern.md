---
created: 2026-08-11 01:06:29
tags: [engram, pattern]
engram_id: 2744
type: pattern
---

# Inserted Executive Systems carousel in autonomy.html

**What**: Inserted the 12-card Executive Systems carousel into docs/presentations/autonomy.html, placed before the `<!-- Diagramas -->` section (line 941).
**Why**: The carousel was missing from autonomy.html; the i18n keys (c_executive_1–12, tip_autonomy_*, sec_executive) already existed in i18n-content.js and i18n.js and were unused.
**Where**: docs/presentations/autonomy.html — new `<section class="fade-in" id="executive">` with `.gv-carousel[data-autoplay="6000"]`, 4 `.gv-carousel-slide` × 3 cards each (col-sm-6 col-md-4, `.section-card.h-100`, `.icon`, h3 + `.info-trigger[data-i18n-title]`, p[data-i18n=c_executive_N], `.badge-tag.ok`), plus `.gv-carousel-dots` and `.gv-carousel-arrow.prev/next` buttons.
**Learned**: The 12 systems mapped to tip keys: autoapply, circuit, escalation, depgraph, abtest, scoring, norms, watchtower, security, state, tracing, cloud. The gv-carousel JS in gv.js (initCarousel) requires ≥2 slides, uses dataset.autoplay ms, builds dots dynamically, and respects REDUCED motion. Prettier already fails on all presentations HTML (pre-existing, not introduced by this change). The `$var:` PowerShell interpolation gotcha required `${var}:` syntax in bash checks.

---
*Imported from Engram on 2026-09-06*
