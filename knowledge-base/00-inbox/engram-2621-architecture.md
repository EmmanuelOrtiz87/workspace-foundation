---
created: 2026-08-07 14:03:47
tags: [engram, architecture]
engram_id: 2621
type: architecture
---

# Trazabilidad completa final: ahorros de compresión + fuentes agnósticas + validación verde

**What**: Completada la trazabilidad de tokens del stack: ahorros de compresión conectados al ledger, detección de fuentes agnósticas, y validación integral. 6 commits nuevos.

**Why**: El usuario pidió trazabilidad completa de costos/ahorros/reducción por transacción, sesión e iteración (orquestador + subagentes), agnóstico a herramientas.

**Where**: src/token-ingest.ts (writeCompressionSavings, detectSources, report con categorías), package.json

**Learned**:
- Ahorros de compresión: .runtime/structural-compression-metrics.json (totalSaved), output-compression-metrics.json (totalTokenSavings), prompt-compression-stats.json (totalSavedTokens) — ahora se leen y se insertan en token_savings con category='compression'.
- Report token:trace muestra: fuentes detectadas (opencode=ACTIVE, codex=present, claude=absent, cursor=absent), transacciones por agente hoy, ahorro por cache, ahorro compression, top sesiones, subagentes individuales.
- Codex tiene 3 sesiones viejas sin usage directo en los samples; Claude/Cursor no instalados. La arquitectura del ingest es un registry de fuentes extensible.
- Commits: 61b16c62 (fuentes), 2414670d (compresión), 501ae37a (report real), 86cf7807 (subagentes), fa072ec9 (close real), 24c925f8 (trazabilidad).
- Nexus ledger completo: token_savings con cache (1.061M tokens) + compression (8K tokens).
- Typecheck 0, lint 0, tests 5/5.

**Validación final**: toda la serie verde; el stack mide consumo real agnóstico con trazabilidad granular por transacción/sesión/agente/costo/ahorro.

---
*Imported from Engram on 2026-09-06*
