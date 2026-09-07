---
created: 2026-08-11 00:05:31
tags: [engram, architecture]
engram_id: 2735
type: architecture
---

# New skill: modern-web-design for HTML presentations

**What**: Created a new skill `.opencode/skills/modern-web-design/SKILL.md` (827 lines) covering modern web design for the Gentle-Vanguard HTML presentations (docs/presentations/).

**Why**: Requested by the orchestrator to consolidate design guidance for the presentation pages: corrected lightbox, Info+Expand system, centralized footer, homogenized headers, modern visual effects, carousels, and Bootstrap Icons usage.

**Where**: .opencode/skills/modern-web-design/SKILL.md

**Learned**:
- The skill references the real design system: gv.css tokens (OKLCH palette: --p #22d3ee, --a #a78bfa, etc.), gv.js effects layer (vanilla, no deps), Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 CDNs, i18n en/es/pt-BR.
- Critical gotchas inherited from presentations-maintenance skill: NO max-width/height:100% on .gv-lightbox-img (double scaling); bi-brain doesn't exist in bootstrap-icons (use bi-book); i18n translate() replaces children so info-trigger must be a sibling span; validate per language block not globally.
- The existing lightbox (initDiagramModal in gv.js) already has pan/zoom; the skill documents extending it with multi-image prev/next nav and correct backdrop-close semantics.
- Skill frontmatter format validated by src/skill-frontmatter-sync.ts: name, version, description (multiline), triggers list. Passes prettier --check and frontmatter sync ("Already has triggers").
- check-skill-sizes.ts reports the new skill exceeds soft limits (max 1000 tokens/150 lines) but that's WARN-only (no process.exit(1)); many existing skills exceed it too. The user explicitly wanted a complete single-file skill.

---
*Imported from Engram on 2026-09-06*
