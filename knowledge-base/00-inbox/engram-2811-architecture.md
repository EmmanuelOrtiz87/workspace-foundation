---
created: 2026-08-13 11:17:03
tags: [engram, architecture]
engram_id: 2811
type: architecture
---

# Absorción ADR-010: skills cibersec + diagram-design + ai-provenance + secret-scanner

**What**: Absorción completa de conocimiento externo (ADR-010): 25 skills cibersec + diagram-design + ai-provenance + secret-scanner TS nativo
**Why**: Usuario pidió robustecer el stack absorviendo 4 repos validados como nativos
**Where**: .opencode/skills/ (27 skills nuevas, 88 total), src/secret-scanner.ts, src/secret-scanner-cli.ts, config/secret-scanner.json, tests/unit/secret-scanner.test.ts, src/skill-frontmatter-sync.ts (fix CRLF + registro), docs/adr/ADR-010-knowledge-absorption-external-repos.md, AGENTS.md (sección absorbed-knowledge)
**Learned**:
- skill-frontmatter-sync.ts tenía bug CRLF: el regex ^---\n no matcheaba archivos CRLF, por lo que parseExistingSkill devolvía body completo y el sync DUPLICABA frontmatter. Fix: usar /\r?\n/ en parse y en la detección de triggers. El body también necesita grupo de captura ([\\s\\S]*)$.
- Los regex de secrets (formatos de tokens) son hechos técnicos públicos — reimplementables en TS sin violar GPL-3.0 de cariddi (solo no copiar su código/estructura).
- Falsos positivos del scanner: hashes git 40-hex matchean "Facebook Client ID" (13-17 dígitos); los literales de patrones del propio catálogo se auto-detectan (esperado).
- watermarks-remover absorbido como skill ai-provenance con política DUAL: inspección default, remoción SOLO a demanda explícita del usuario. Documentado en SKILL.md + ADR-010 + AGENTS.md.
- Los agentes subagentes nativos usan opencode/deepseek-v4-flash-free; NO inyectar fallback_model: kimi-2-5 en prompts de delegación (causa "Model not found: kimi-2-5/" — sdd-apply falla, usar general como fallback universal).
- 5 errores typecheck y 14 lint PRE-EXISTENTES fuera de scope (circuit-breaker-v2, mcp/fetch-server, multi-channel-alert, self-healing-db, performance-metrics-collector, predictive-anomaly-detector, token-spike-guard, validate-opencode-config).

---
*Imported from Engram on 2026-09-06*
