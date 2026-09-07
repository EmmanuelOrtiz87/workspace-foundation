---
created: 2026-06-06 04:34:58
tags: [engram, architecture]
engram_id: 1342
type: architecture
---

# Full project audit completed - findings and plan

**What**: Completed full audit of Gentle-Vanguard project covering: dashboard frontend (7 components), backend server (8 files), reports/ (6 files), dashboard-v2/ (10 files), scripts/ (250+ files across 42 dirs), deprecated/ (21 files), adapters/ (12 files), tests/ (18 files), configs/, CI/CD (34 workflows), skills/ (386 entries)

**Why**: User requested comprehensive audit to identify issues, plan improvements, and create a work plan

**Where**: Entire project at C:\Workspace_local\gentle-vanguard

**Key Findings**:
- **CRITICAL**: `scripts/metrics/metrics-server.ps1` has 4x code duplication — completely broken
- **CRITICAL**: `scripts/mcp/skill-server.ts` execute_skill is a mock (doesn't run any skill)
- **HIGH**: InteractiveDocs only has 2 trivial tutorials, needs real content from presentation HTML
- **HIGH**: Dashboard tokens/sessions/cost always 0 — real-data.ts doesn't generate real data
- **HIGH**: `scripts/gateway/` directory documented but missing
- **HIGH**: Exposed API key in `config/deprecated/gateway.json`
- **MEDIUM**: No auth on any API, path traversal risk in dashboard-v2/server.js
- **MEDIUM**: `tests/integration/api-health.test.ts` missing — package.json points to wrong file
- **MEDIUM**: Two lefthook configs with overlapping hooks (.lefthook.yml + config/lefthook.yml)
- **MEDIUM**: No vitest/playwright installed but tests depend on them
- **MEDIUM**: 34 GitHub workflows — consolidation opportunity
- **BROKEN**: Multi-line frontmatter regex in skill-server.ts uses `"\s"` instead of `"\\s"`
- **DEAD**: Entire deprecated/ directory (21 files, ~2300 lines) — safe to delete
- **DEAD**: adapters/format-adapters/ — code exists but never tested/used (3 adapters)
- **DEAD**: sw.js never registered, analytics.js never included
- **LOW**: 79 entries in scripts/utilities/ with no naming convention

---
*Imported from Engram on 2026-09-06*
