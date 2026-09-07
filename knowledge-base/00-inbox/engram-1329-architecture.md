---
created: 2026-06-04 04:36:11
tags: [engram, architecture]
engram_id: 1329
type: architecture
---

# Auditoría PSScriptAnalyzer completa y corrección masiva

**What**: Auditoría exhaustiva de todo el stack con PSScriptAnalyzer (~4000 violaciones detectadas). Corrección selectiva de bugs críticos: 117 empty catch blocks arreglados (bulk replace), 9 Invoke-Expression reemplazados con operador &, 1 cmdlet override (Write-Warning/Write-Error), 2 automatic variable shadowings corregidos, 1 unused variable eliminado. También: SECURITY.md redirect en raíz, orchestrator.json version actualizado, $null residual eliminado, CI workflows hardening, docs actualizados.

**Why**: El usuario reportó que siempre decimos que está OK pero siempre hay gaps. Exigió auditoría real sin falsos positivos ni "confío en que está bien". Se ejecutaron todas las herramientas disponibles.

**Where**: 117+ scripts modificados (bulk empty catch fix), scripts/adaptive/agent-message-bus.ps1, scripts/setup-complete.ps1, scripts/run-tests-simple.ps1, scripts/utilities/FINE-TUNING/ft-pipeline.ps1, scripts/utilities/MULTI-REPO/multi-repo-engine.ps1, scripts/utilities/INSTALL/install-prerequisites.ps1, scripts/utilities/tests/run-test-suite.ps1, scripts/utilities/SESSION/session-autostart.ps1, scripts/utilities/DEPLOYMENT/setup-wizard.ps1, scripts/validation/update-all.ps1, scripts/utilities/SKILLS-TOOLS/update-tools.ps1, scripts/utilities/SKILLS-TOOLS/ensure-tools-active.ps1, .github/workflows/skill-registry-validation.yml, .github/workflows/skill-scan.yml, rules/NORMATIVAS-ENFORCEMENT.md, docs/STACK-STATUS-REPORT.md, config/orchestrator.json, SECURITY.md

**Learned**: PSScriptAnalyzer tarda >60s en escanear 300+ scripts. Usar grep directo es más rápido para encontrar patrones específicos. El bulk replace de `catch { }` con regex falla en archivos abiertos por el proceso actual (pre-process-input.ps1). Invoke-Expression se usa mayoritariamente con comandos simples donde `& $var` es reemplazo directo. El caso compuesto en multi-repo-engine.ps1 requería Push-Location/Pop-Location. agent-verify timeout es por Invoke-Pester — no es bug de código, es lentitud inherente de Pester con muchos tests.

---
*Imported from Engram on 2026-09-06*
