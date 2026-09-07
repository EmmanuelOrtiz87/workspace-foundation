---
created: 2026-08-25 10:00:33
tags: [engram, pattern]
engram_id: 3116
type: pattern
---

# Circuit-breaker v2 wired into all delegators

**What**: Completado circuit-breaker v2 en todos los delegators. agent-delegator.ts: ejecución nativa envuelta en executeWithCircuit('agent_delegation:<agente>') con fallback fail-fast (retorna DelegationResult estructurado en vez de quemar timeout del spawn). aws-delegator.ts y azure-delegator.ts: migrados del patrón manual duplicado (clases CircuitBreaker locales con canExecute/recordSuccess/recordFailure) al v2 compartido con nombres 'aws_lambda' y 'azure_function'. Clases duplicadas eliminadas (~45 líneas c/u).

**Why**: El plan P1 pedía completar circuit-breaker v2 en todos los delegators para resiliencia.

**Where**: src/agent-delegator.ts, src/aws-delegator.ts, src/azure-delegator.ts, src/circuit-breaker-v2.ts

**Learned**: Mejora de semántica clave: el v2 graba el OUTCOME FINAL del retry loop completo — un fallo transitorio recuperado por retry ya NO cuenta como fallo del circuito (antes cada intento grababa). Nuevo config 'agent_delegation' (threshold 4, timeout 120000ms generoso para subagentes, reset 45s). Nueva resolveCircuitConfig() con prefix-match: 'agent_delegation:BA' → defaults de agent_delegation; fallback final external_api. Estado file-based en .runtime/circuit-breaker-v2/state.json con locking seguro entre procesos. Verificado: typecheck+lint verdes, --status muestra los 6 configs. SLO alerts por tenant sigue pendiente (requiere definir objetivos).

---
*Imported from Engram on 2026-09-06*
