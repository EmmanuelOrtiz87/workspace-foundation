---
created: 2026-06-11 03:15:10
tags: [engram, bugfix]
engram_id: 1390
type: bugfix
---

# Fixed quality-gates.json to reflect real enforcement

**What**: Rewrote config/quality-gates.json from fantasy 29 gates (referencing uninstalled tools like jest, cypress, sonarqube, snyk, webpack, typedoc) to realistic v2.0.0 with real enforcement

**Why**: The original document was a "falso positivo" — claimed 29 quality gates but only 4-5 actually worked. Real enforcement is via lefthook (19 gates) + CI (7 gates)

**Where**: config/quality-gates.json

**Learned**: quality-gates.json is documentation-only, not enforced programmatically. The real enforcement is in .lefthook.yml (19 pre-commit/commit-msg/pre-push/post-commit hooks) and .github/workflows/ (CI pipelines)

---
*Imported from Engram on 2026-09-06*
