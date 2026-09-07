---
created: 2026-05-31 23:39:13
tags: [engram, architecture]
engram_id: 1261
type: architecture
---

# Fase 1 — Importación skills mercury-agent-skills + skillspector pipeline

**What**: Fase 1 completada: importación de 16 skills metodológicas desde mercury-agent-skills e integración de skillspector (NVIDIA) como pipeline de seguridad.

**Why**: Necesitábamos skills que no teníamos (Prompt Engineering, Agent Design, Memory Management, Security Audit, Clean Code, ADRs, Testing Strategies, etc.) y un mecanismo para vetar skills externas antes de importarlas.

**Where**:
- skills/ — 16 nuevas skills importadas (prompt-engineering-skill, ai-agent-design-skill, memory-management-skill, token-budget-tracking-skill, agent-audit-logging-skill, security-audit-skill, clean-code-skill, adr-skill, test-strategy-skill, e2e-testing-skill, api-testing-skill, accessibility-testing-skill, monitoring-observability-skill, shell-scripting-skill, accessibility-design-skill, data-storytelling-skill)
- scripts/security/scan-skill.ps1 — wrapper PowerShell para skillspector
- scripts/security/scan-all-skills.ps1 — batch scanner con reporte SUMMARY.md
- .lefthook.yml — pre-commit hook skill-scan agregado
- .github/workflows/skill-scan.yml — CI workflow
- config/auto-delegation.json — skillToAgentProfile + keywordMappings actualizados
- skills/SKILL_INDEX.md — 16 skills registradas
- reports/skill-security/SUMMARY.md — batch scan de 135 skills (score avg 5.73)

**Learned**: skillspector requiere parche para Windows (yara-python no compila sin MSVC). El exit code 1 de skillspector no es error sino "issues found" por diseño. El formato SKILL.md de mercury-agent-skills es compatible con GV.

---
*Imported from Engram on 2026-09-06*
