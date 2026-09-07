---
created: 2026-08-09 20:34:54
tags: [engram, bugfix]
engram_id: 2712
type: bugfix
---

# Eliminadas simulaciones de producción: audit real, opencode backend, trend/segment, SLO real

**What**: Auditoría de gaps "sin simulaciones ni parciales" reveló 3 gaps reales en código de producción, todos eliminados con soluciones nativas del stack:
1. `src/security/dependency-security-checker.ts`: era mock puro (hasVulnerabilities=false hardcodeado → siempre compliant:true). Ahora ejecuta `pnpm audit --json` real (fallback npm) y parsea metadata.vulnerabilities (pnpm v9), legacy npm y texto. Fail-open si falla (nunca miente).
2. `src/llm-call-wrapper.ts`: CLI devolvía [Simulated LLM response] siempre. Ahora `opencodeLLMCall` ejecuta `opencode run <prompt> [--model]` real (args array vía runSync del adapters/command-runner), `--simulate` explícito para testing, fallback simulado solo si binario ausente, error accionable si binario incompatible. GOTCHA: en esta máquina Windows el binario global opencode-ai.exe es incompatible con la versión de Windows (el runtime del agente funciona vía opencode pero el CLI global está roto) — en CI/Ubuntu el backend real funciona.
3. `src/data-analyst.ts`: trend/segment anunciados "(not implemented)" caían en default→describe silencioso. Implementados cmdTrend (agrupación diaria YYYY-MM-DD + mean/min/max por punto + dirección upward/downward/flat con % cambio) y cmdSegment (agrupación por valor + stats + segmento dominante). Además bug real en detectType: fechas ISO nunca se clasificaban como datetime (el chequeo datetime estaba dentro del bloque numérico); ahora datetime se detecta primero excluyendo números puros (Date.parse acepta "2026" pero Number() también).
4. `src/token-optimization-orchestrator.ts`: modo pipeline etiquetado como benchmark con LLM simulado (nota en help + warning en ejecución).
5. `src/core/session-metrics-tracker.ts` + `src/core/metrics-aggregator.ts`: SLO era placeholder `100 - avgLatency/100` y percentiles eran `avg*0.9/avg*1.5`; ahora getAllLiveMetrics calcula p50/p95 reales por percentil de turnos y SLO con umbral 5000ms (mismo que getSLOCompliance), y el aggregator los consume.
6. `src/security/dependency-security-enforcer.ts` applyRemediations: simulaba comandos; ahora dry-run por defecto + ejecución real con {apply:true} (vulnerability-scan→pnpm audit fix, security-updates→pnpm update; removals corren comandos de inspección, no destrucción sin nombres).

**Why**: El usuario pidió un stack sin simulaciones/parciales. La auditoría con grep (TODO|FIXME|simulat|stub|placeholder) sobre src/ reveló los gaps reales vs simulaciones intencionales legítimas (deterministic-test-framework con model fixture, auth-session stub disabled by design, redirecciones documentadas secret/cache en gv.ts, plantillas generadas de agentes).

**Where**: src/security/dependency-security-checker.ts, src/security/dependency-security-enforcer.ts, src/llm-call-wrapper.ts, src/data-analyst.ts, src/token-optimization-orchestrator.ts, src/core/session-metrics-tracker.ts, src/core/metrics-aggregator.ts (commit 188fb65c)

**Learned**: Pipeline session-autostart: 111 steps, 75 lazy, 7 disabled (todos deprecated/migrados), todos los scripts existen. Patrón para reemplazar simulaciones: ejecutar el comando real (pnpm audit --json, opencode run) + parsear output + fail-open con mensaje claro, nunca hardcodear resultados. Validación completa: TSC 0, Lint 0, 239/239 unit PASS, dashboard build OK, CI 9/9 jobs verde, ramas homologadas.

---
*Imported from Engram on 2026-09-06*
