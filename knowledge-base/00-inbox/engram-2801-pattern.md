---
created: 2026-08-13 05:44:24
tags: [engram, pattern]
engram_id: 2801
type: pattern
---

# PATTERN: Token Consumption Investigation and Resolution

**Pattern**: Cuando se reporta consumo masivo de tokens, investigar en este orden:

1. **Query Nexus**: `SELECT session_id, SUM(input_tokens) FROM token_transactions GROUP BY session_id ORDER BY SUM(input_tokens) DESC`
   - Identificar sesiones anómalas
   - Calcular ratio input/output

2. **Detect root cause**:
   - ¿ratio >20:1? → Acumulación de contexto
   - ¿output excesivo? → Chat level enforcement
   - ¿input excesivo? → Tool outputs o mensajes

3. **Evaluate solutions** (5-way analysis):
   - Tool API capabilities
   - Middleware viability
   - Fork complexity
   - Existing plugins
   - Native mitigations

4. **Research ecosystem**:
   - Buscar forks con feature similar
   - Verificar docs oficiales
   - Check configuraciones disponibles
   - Validar experimentales

5. **Implement configuración** antes de fork
   - 80% de problemas son config, no código
   - OpenCode V2 tiene compaction con `prune: true`
   - Verificar `.well-known/opencode` endpoints

**Learned**: Siempre revisar configuración oficial antes de considerar fork. Sistemas modernos tienen context management nativo solo desactivado por defecto.

**Files**: Query scripts, config templates, investigation docs
**Validation**: After implementation, esperar 60-80% reducción tokens

---
*Imported from Engram on 2026-09-06*
