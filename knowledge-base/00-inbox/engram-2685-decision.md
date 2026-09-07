---
created: 2026-08-09 02:31:22
tags: [engram, decision]
engram_id: 2685
type: decision
---

# Expansión multi-dominio: 9 agentes nativos de dominio + fix de stubs silenciosos

**What**: Transformé el stack de "herramienta de código" a "asistente operativo multi-dominio". Creé 9 agentes de dominio nativos TS (mkt, sales, finance, hr, legal, bus-tele, gitflow, knowledge, sia) con un core genérico compartido, más un fix crítico del delegador y una herramienta de limpieza de referencias.

**Why**: El premortem-agent reveló que los 10 agentes de dominio eran solo prompts en opencode.json/config/agent-prompts SIN implementación nativa, y que delegar a ellos devolvía un stub con success:true (fallo invisible que envenenaba scoring y aprendizaje). El usuario quiere cobertura total de la diaria (no solo programar).

**Where**:
- src/agents/domain-agent-core.ts — core genérico (carga prompt, produce artifact, persiste a .session/artifacts/<domain>/, emite usage a .session/skill-usage/)
- src/agents/{mkt,sales,finance,hr,legal,bus-tele,gitflow,knowledge,sia}-agent.ts — 9 wrappers con ejecutores reales (MEDDIC, balance sheet, GDPR, inclusive hiring, etc.)
- src/agent-delegator.ts — generateAgentResponse() ahora devuelve success:false con error claro (antes success:true stub)
- config/agents.json — 20 agentes registrados (11 + 9 nuevos)
- opencode.json — steps reconciliados (mkt/sales/finance/hr/legal/bus-tele=20, gitflow=30, knowledge=25, sia=35)
- src/fix-skill-references.ts — detecta/corrige referencias .ps1 rotas por la migración PS1→TS (KNOWN_RENAMES para renames con nombre distinto)

**Learned**:
- Bug de OpenCode: `inherit-from-session` sigue rompiendo subagentes custom (usar explore/general como fallback universal)
- 130 referencias .ps1 rotas en skills; 88 corregidas con equivalente TS (mismo basename o KNOWN_RENAMES); 58 restantes requieren revisión manual (scripts genuinamente eliminados)
- Pattern `**/` dentro de comentario JSDoc cierra el bloque (rompe parseo esbuild/tsx)
- El guard de ejecución CLI debe ser `import.meta.url === pathToFileURL(process.argv[1]).href` (no `file://${...}`) o el script no corre
- Los agentes nativos TS producen planes estructurados + persisten artifacts; el razonamiento LLM real lo aporta el orquestador vía task tool

**Pendiente**: revisar 58 referencias manuales, guardar session summary, probar todos los agentes de dominio con tareas reales.

---
*Imported from Engram on 2026-09-06*
