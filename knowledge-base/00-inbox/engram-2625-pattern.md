---
created: 2026-08-07 18:03:35
tags: [engram, pattern]
engram_id: 2625
type: pattern
---

# Modernized autonomy.html & agents-pipeline.html presentations

**What**: Reconstructed 2 presentation HTML files in docs/presentations/ with the shared gv.css/gv.js design system: autonomy.html and agents-pipeline.html.
**Why**: Stack data was outdated (v8.0.1, 263 TS, 82/82 health, 118 skills) and both files still used the old inline CSS before the unified design system existed.
**Where**: docs/presentations/autonomy.html, docs/presentations/agents-pipeline.html (reference: docs/presentations/index.html, assets/css/gv.css, assets/js/gv.js)
**Learned**:
- Both files now use `<link rel="stylesheet" href="assets/css/gv.css">` (after bootstrap CDNs) + minimal page-specific `<style>` only (autonomy kept .flow-row/.progress-gv; agents-pipeline kept .flow-chain/.flow-chain .step/.flow-chain .arr).
- Body: `class="grain"` + `.scroll-progress` + `.aurora` divs; hero uses `<span class="hero-badge mb-3">✦ v3.5.0 — ...</span>`.
- Inline IntersectionObserver scripts removed — gv.js handles fade-in, count-up ([data-count]), spotlight, tilt, tooltips.
- Data updated: v3.5.0, 328 TS/97 test, 112/112 health/18 components, 21 agents, 170 skills, 65 normatives, 101 enabled/70 lazy pipeline (31 Phase-1), 105 total config.
- autonomy.html: aligned 8 core systems → 12 executive systems (added Security Orchestrator, State Persistence, Distributed Tracing, Cloud Connectors), Watchtower badges expanded 16→18 components, added executive-loop.svg diagram section.
- agents-pipeline.html: added i18n dropdown + data-i18n nav (copied from index.html), added 7 missing agents to ecosystem table (maintenance, self-diag, sia, gitflow, knowledge), added pipeline-flow.svg diagram section with #diagrams nav link.
- gv.js initDiagrams() returns early when SVG has no [data-tip]/[data-group]/aria-label interactive elements — static SVGs (executive-loop.svg, pipeline-flow.svg) render fine without tooltips.
- Prettier multi-line closing tags (`</a\n>`) are the codebase convention; tag-balance checks must count `</tag` not `</tag>`.

---
*Imported from Engram on 2026-09-06*
