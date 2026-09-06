---
created: 2026-08-13 11:29:01
tags: [engram, architecture]
engram_id: 2813
type: architecture
---

# ADR-010 integraciones: watchtower, pre-commit, routing cibersec

**What**: Completados los follow-ups de integración del ADR-010: (1) componente `secret-scanner` en watchtower, (2) hook pre-commit secret-scanner en .lefthook.yml, (3) registro de skills absorbidas en config/subagent-mapping.json, (4) keywords cibersec en recommend-agent.ts matchDomain
**Why**: Hacer las skills/capacidades absorbidas operativas en el stack (routing, validación, gates)
**Where**: src/core/maintenance-watchtower.ts (checkSecretScanner, 94/94 PASS), .lefthook.yml (comando secret-scanner), config/subagent-mapping.json (DEV+6 DevSecOps, GOV+8 compliance/ai-provenance, QA+6 API security), src/recommend-agent.ts (bloque de ~28 keywords cibersec → dominio security → gov-agent), AGENTS.md (sección Integraciones del scanner)
**Learned**: El routing antes caía en static-fallback con dominio 'governance'/'testing' y confianza 0.3 para tareas sbom/prompt-injection; tras añadir keywords explícitas rutea a security con gov-agent. Las keywords van ANTES de los verbos genéricos ('secur') por el orden del array pairs en matchDomain.

---
*Imported from Engram on 2026-09-06*
