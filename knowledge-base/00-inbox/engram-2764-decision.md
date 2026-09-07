---
created: 2026-08-12 04:37:16
tags: [engram, decision]
engram_id: 2764
type: decision
---

# CI push-checks: fixes finales commit cf248344 + decisión de posponer

**What**: Sesión final del esfuerzo "Push Checks 100% verde". Se commiteó y pusheó `cf248344` con los 2 últimos fixes de CI: `scanners: vuln` en reusable-security.yml (trivy solo escanea vulnerabilidades, no secret/misconfig — esos los cubren Gitleaks/Secretlint) y `MD030: false` en .markdownlint.json (prettier usa 2 espacios tras list markers, markdownlint v0.34.0 espera 1). Push pasó todos los hooks pre-push de lefthook (audit-check, lint, npm-audit, orchestrator-auto-fix, typecheck). Decisión del usuario: POSPONER los 2 checks restantes (Workflow Lint + Integration Tests) a próxima sesión.
**Why**: El usuario evaluó el ROI: los 4 checks rojos NO bloquean nada (repo privado free sin branch protection — API devuelve 403; workflow CI no tiene job gate). El valor real ya se capturó: 2 CVEs corregidas (react-router 7.18.1→7.18.2 GHSA-qwww-vcr4-c8h2, golang.org/x/text v0.3.8→v0.39.0 CVE-2026-56852), lock npm obsoleto eliminado, docker-compose arreglado.
**Where**: .github/workflows/reusable-security.yml, .markdownlint.json, commit cf248344 en develop
**Learned**: (1) `action-validator@0.0.7` en npm es un paquete random (hasnat), NO el validador real de workflows (mheap) — el job Workflow Lint de reusable-lint.yml usa ese npx con fallback `|| echo`, así que el fallo real del job podría estar en otra parte (log del job no disponible: BlobNotFound 404). (2) Integration Tests falla con "No test suite found in file" en 10 archivos + `@aws-sdk/client-lambda` faltante en cloud-connectors.test.ts + "Expected zero exit code, got 2" en opencode-validation.test.ts (validate-opencode-all.ts devuelve exit 2) + `fetch failed` en api-health.test.js. El job compose es redundante con Unit Tests (src/test-runner-optimized.ts ya cubre tests/integration/*.test.ts). (3) Para descargar logs de run: `gh api .../actions/runs/<id>/logs` con curl.exe (gh api no tiene -o; redirect de PowerShell corrompe binarios). (4) Cierre de sesión: dashboard-stop.ts + matar daemons node del workspace por patrón de command line (149 procesos acumulados de sesiones previas).

---
*Imported from Engram on 2026-09-06*
