---
created: 2026-07-30 15:07:08
tags: [engram, decision]
engram_id: 2270
type: decision
---

# FASE 2 Completada - CI/CD Security Hardening

**What**: Completada FASE 2 de fortalecimiento CI/CD

**Changes**:
1. npm audit bloqueante: Eliminado `|| true`, CI falla si hay vulnerabilidades high+
2. SHA pinning: 25 actions en 14 workflows pinnados a SHA específicos
3. SAST: eslint-plugin-security configurado con reglas de seguridad
   - detect-object-injection: warn
   - detect-non-literal-regexp: warn  
   - detect-non-literal-require: warn
   - detect-possible-timing-attacks: warn
   - detect-eval-with-expression: error
   - detect-no-csrf-before-method-override: error
   - detect-pseudoRandomBytes: error
   - detect-unsafe-regex: error

**Hallazgos SAST**: Detectados 20+ warnings en:
- scripts/mcp/skill-server.ts (6 warnings)
- scripts/recovery/schema-integrity.ts (1 warning)
- scripts/utilities/MODEL-ROUTER/provider-failover.ts (13 warnings)  
- scripts/utilities/ops/REVIEW/receipt-manager.ts (1 warning)

**Next**: FASE 3 - Integrar planning-estimator en el flujo de trabajo

**Where**: .github/workflows/ci.yml, eslint.config.js, scripts/pin-actions.py

**Learned**: eslint-plugin-security requiere continue-on-error: true inicialmente mientras se corrigen los warnings existentes. SHA pinning requiere mantener un registro actualizado de commits hash para actions comunes.

---
*Imported from Engram on 2026-09-06*
