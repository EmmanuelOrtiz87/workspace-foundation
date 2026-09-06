---
created: 2026-09-01 04:11:07
tags: [engram, architecture]
engram_id: 3566
type: architecture
---

# Archify eval — potential GV app candidate

**What**: Evaluated https://github.com/tt-a1i/archify as a candidate for GV native app.

**Why**: User asked if Archify's capabilities could be absorbed, forked, or copied as a GV-branded app for the stack and projects generated from it.

**Where**: Potential target: apps/archify (new), command-center registry, design-system integration.

**Learned**:
- Archify v2.16.0 (MIT, ~39k stars, zero runtime deps, pure Node.js ES modules)
- 5 diagram types: Architecture, Workflow, Sequence, Data Flow, Lifecycle
- Rich interactive viewer: search, pan/zoom, semantic lens, route probe, upstream/downstream reach, guided story playback, presentation mode
- Architecture Delta / PR proof — machine-readable before/after comparison for code review
- Exports: PNG, JPEG, WebP, SVG, WebM, 1200×630 share cards
- Agent skill model: typed JSON IR → validate → render → self-contained HTML
- GV gap: NO dedicated diagramming/architecture visualization web app exists (only CLI diagram-renderer + diagram-design skill)
- Tech compatibility: Archify zero deps, GV apps use React+TS+Vite 8 — can build a React shell around Archify's render pipeline
- Based on Cocoon-AI/architecture-diagram-generator (MIT), heavily re-architected by tt-a1i
- Local-first, server-optional, no external services needed — matches GV philosophy (ADR-0017)
- CI tested cross-platform (Ubuntu/macOS/Windows), Node 18-24

---
*Imported from Engram on 2026-09-06*
