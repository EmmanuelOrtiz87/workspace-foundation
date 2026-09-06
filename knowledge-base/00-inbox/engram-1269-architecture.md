---
created: 2026-06-01 10:42:43
tags: [engram, architecture]
engram_id: 1269
type: architecture
---

# Importación masiva 226 skills (5 repos)

**What**: Importación masiva de 226 skills desde 5 repos externos. Stack GV creció de 170 a 388 skills. Repos: anthropics/skills (17), knowledge-work-plugins (141), taste-skill (13), Claude-BugHunter (51), academic-research-skills (4).

**Why**: Robustecer el stack multi-herramienta con skills oficiales Anthropic, enterprise plugins, diseño/taste, seguridad ofensiva, y pipeline académico.

**Where**: scripts/security/import-repo-skills.ps1 (universal), scripts/security/import-knowledge-work-plugins.ps1 (multi-dept), config/auto-delegation.json (+218 skillToAgentProfile, +94 keywordMappings), skills/SKILL_INDEX.md (+sección Imported Skills), reports/skill-security/IMPORT-AUDIT.md

**Learned**: skills con lowercase `source:` en frontmatter identifican repositorio de origen — permite filtrar, auditar y rastrear procedencia. El formato .claude-plugin/ se preserva en cada skill directory para compatibilidad con Claude ecosistema. Las 26 alertas de audit son todas LOW (inline code examples en skills de seguridad/diseño).

---
*Imported from Engram on 2026-09-06*
