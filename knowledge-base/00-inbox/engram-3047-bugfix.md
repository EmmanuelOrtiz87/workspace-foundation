---
created: 2026-08-24 21:07:14
tags: [engram, bugfix]
engram_id: 3047
type: bugfix
---

# Documentation hygiene cleanup 2026-08-24

**What**: Fixed confirmed documentation links/case references and updated clearly live guide version labels to 3.8.2; added a canonical current status note.
**Why**: Keep documentation safe and current without rewriting historical reports or inventing versions.
**Where**: README-PUBLIC.md, docs/README.md, docs/status/CANONICAL-STATUS.md, docs/getting-started/README.md, docs/guides/README.md, docs/guides/OPERATION-GUIDE.md, docs/guides/FIRST-TIME-SETUP-CHECKLIST.md, docs/guides/STACK-OPTIMIZATION-ROADMAP.md, docs/operations/procedures/QUICK-COMMANDS.md, skills/knowledge-base/SKILL.md, skills/project-orchestrator-skill/references/protocols.md, config/documentation-governance.json.
**Learned**: The repository package version is 3.8.2. Dated reports, release snapshots, roadmaps, and archived materials retain conflicting historical version claims and were intentionally left unchanged. Local markdownlint-cli2 is not installed; targeted Prettier and content validation passed, and git diff --check passed.

---
*Imported from Engram on 2026-09-06*
