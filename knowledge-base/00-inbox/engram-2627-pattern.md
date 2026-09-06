---
created: 2026-08-07 21:04:53
tags: [engram, pattern]
engram_id: 2627
type: pattern
---

# i18n ES/PT de presentaciones securitygovernance y patternsconventions

**What**: Traducidos los diccionarios i18n de 2 presentaciones del stack: bloques es: y pt: completos en español y portugués (pt-BR). en: sin modificar.
**Why**: Los bloques es: y pt: eran placeholders copiados del inglés.
**Where**: docs/presentations/assets/js/content-parts/i18n-content-securitygovernance.js (97 claves) y i18n-content-patternsconventions.js (11 claves)
**Learned**: 1) Términos técnicos/nombres propios se mantienen sin traducir: Security Orchestrator, Audit Pipeline, Governance, Guardrails, Compliance, Hardening, Karpathy, TDD, CI/CD, JSONL, SHA256, lefthook, gitleaks, trivy, secretlint, trufflehog, YAML, SQLite, Nexus, Watchtower, Pipeline, Dashboard, WebSocket, API, DAO, WAL, A/B, LLM, RAG, i18n, SDD, BA, SAD, DEV, QA, ML. 2) Nombres de archivo .md (NORMATIVAS-*, AI-NORMATIVES.md, HUMAN-IN-THE-LOOP.md, etc.) quedan intactos. 3) Las claves _98 (securitygovernance) y _12 (patternsconventions) ya eran español en en: — en es: quedan igual y en pt: se traducen. 4) Los strings multilínea usan escapes \r\n o \n con espacios de indentación dentro del valor — deben preservarse al editar. 5) Estructura de verificación: node -e con regex /es: ({...}),\s*pt:/ y /pt: ({...})\s*\};/ + JSON.parse.

---
*Imported from Engram on 2026-09-06*
