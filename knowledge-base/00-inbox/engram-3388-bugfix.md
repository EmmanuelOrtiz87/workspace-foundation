---
created: 2026-08-30 01:43:55
tags: [engram, bugfix]
engram_id: 3388
type: bugfix
---

# Alertas de seguridad corregidas en PR

**What**: Se corrigieron falsos positivos críticos de Trivy/Gitleaks en fixtures y reglas, y se modernizó el guard CLI de integración; los cambios fueron committeados y enviados al PR #166.
**Why**: Evitar marcar como secretos los patrones sintéticos de pruebas/detectores, sin desactivar detección real.
**Where**: `scripts/utilities/security/verify-security-improvements.ts`, `scripts/utilities/security/complete-security-verification.ts`, `skills/security-expert-skill/configs/security-rules.json`, `src/security/integration-validator.ts`, `src/security/secret-scanner/patterns.ts`, `tests/unit/integration-validator-import.test.ts`.
**Learned**: Tests raíz 6 suites, typecheck/lint/pre-push 12/12 PASS; CI del PR #166 PASS. Las alertas del default branch todavía pueden aparecer hasta merge/rescan: PAT/Telegram secret alerts y Dependabot/Vite/Vitest/sharp históricas; no deben marcarse skipped como false positive sin resolver/revocar y nueva evidencia.

---
*Imported from Engram on 2026-09-06*
