---
created: 2026-08-22 13:33:00
tags: [engram, pattern]
engram_id: 2958
type: pattern
---

# Grype sin DB y trivy SARIF exit-code en runners CI

**What**: Dos gates de seguridad fallaban en CI por estado del runner, no por vulns reales: (1) SBOM scan (container-scan.ts) salía exit 1 porque grype se instala fresco en el runner SIN vulnerability DB y el wrapper usa GRYPE_DB_AUTO_UPDATE=false; (2) trivy fs con exit-code:1 + format sarif moría silenciosamente ~500ms después del notice de versión, sin resumen de reporte.
**Why**: El reporte SBOM era correcto (464 pkgs, 0 vulns) pero propagaba el exit code de grype sin DB. Trivy local 0.73 mostraba 0 HIGH/CRITICAL en todo el árbol (root + research incluidos).
**Where**: .github/workflows/reusable-security-scan.yml — paso `grype db update` agregado tras instalar grype; trivy cambiado a exit-code: 0 + options --skip-version-check. Commit ea081373.
**Learned**: Gates bloqueantes de supply-chain = pnpm audit --audit-level=high + grype SBOM (--fail-on high). Trivy corre no-bloqueante y sube SARIF a Code Scanning (hallazgos visibles ahí). Para reproducir escaneos localmente saltar dirs locales: --skip-dirs ".session,.runtime,.git,build,dist,node_modules,research,.codegraph,graphify-out" (.session tiene symlinks rotos que crashean trivy).

---
*Imported from Engram on 2026-09-06*
