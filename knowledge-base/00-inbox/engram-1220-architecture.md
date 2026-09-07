---
created: 2026-05-30 04:13:38
tags: [engram, architecture]
engram_id: 1220
type: architecture
---

# Normativas MCP/SDD/Team/Skill Factory

**What**: Created 4 normativa files with 5 mandatory rules each: NORMATIVA-MCP-SERVER.md (compile after changes, registry updated, integration tests before merge, zero errors, backward compat), NORMATIVA-SDD-PIPELINE.md (feature name required, artifacts in .sdd/, gates between phases, dry-run first, no commit artifacts), NORMATIVA-TEAM-MODE.md (MaxParallel ≤ CPU, timeout required, synthesize results, logs in .session/, validate skills via MCP), NORMATIVA-SKILL-FACTORY.md (complete frontmatter, 3+ triggers, -Register for discovery, auto-rebuild, references/detail.md). Each includes commands, structure, error recovery, and references.

**Why**: Standardize usage of all new components with enforceable rules, preventing misconfiguration and ensuring consistent quality.

**Where**: rules/NORMATIVA-MCP-SERVER.md, rules/NORMATIVA-SDD-PIPELINE.md, rules/NORMATIVA-TEAM-MODE.md, rules/NORMATIVA-SKILL-FACTORY.md

**Learned**: All normativas follow the same format as NORMATIVA-PNPM-SECURITY.md (table of rules + approved commands + references). Each includes a recovery section for failure scenarios.

---
*Imported from Engram on 2026-09-06*
