---
created: 2026-08-29 16:25:23
tags: [engram, decision]
engram_id: 3261
type: decision
---

# Definitive deprecation of legacy apps

**What**: Removed `apps/doc-gentle` and `apps/discord-bot`, deleted the Doc-Gentle presentation, and removed active workspace, product catalog, marketing, Academy/demo/roadmap, and documentation references.
**Why**: User requested definitive deprecation with no active build, command, official documentation, demo, Academy, or roadmap inclusion while preserving historical records.
**Where**: pnpm-workspace.yaml; docs/status/CANONICAL-STATUS.md; docs/STATUS-COMPLETO.md; docs/analysis/PENDING-AUDIT.md; docs/planning/*; docs/plans/STACK-EVOLUTION-PLAN-2026.md; docs/presentations/marketing.html, md-viewer.html, resources-index.html, social-templates/CONTENT-TEMPLATES.md; scripts/social-poster.ps1; src/cli/validate-presentations.ts.
**Learned**: Remaining matches are intentional canonical exclusion text, dated historical release records, and generic Discord-token secret-scanner tests; `npm run presentations:validate -- --main` passes, while the full validator retains its known failures for CMS pages excluded by --main.

---
*Imported from Engram on 2026-09-06*
