---
created: 2026-06-04 03:35:52
tags: [engram, architecture]
engram_id: 1328
type: architecture
---

# Corrección masiva de auditoría normativa

**What**: Corrección completa de todas las violaciones detectadas por normative-audit-pipeline. Se actualizaron: NORMATIVAS-CODIGO.md §4.3 para clarificar excepciones de Write-Host/Select-String, audit pipeline para solo checkear directorios relevantes (reducción 400→9 violaciones), 5 hardcoded paths reemplazados con dinámicos, 3 Select-String en workflows reemplazados con -match, Out-Null-vs-Select-String en audit corregido, LEARNED-NORMS.md populado, STACK-STATUS-REPORT.md actualizado, NORMATIVAS-ENFORCEMENT.md sincronizado con hooks reales, CI workflow creado, .tmp/ limpiado (7,467 archivos).

**Why**: Pendientes de la sesión anterior: ~400 violaciones Write-Host/Select-String, auto-norm-learner vacío, hardcoded paths, STACK-STATUS desactualizado, NORMATIVAS-ENFORCEMENT con hooks ficticios.

**Where**: rules/NORMATIVAS-CODIGO.md, scripts/utilities/normative-audit-pipeline.ps1, scripts/utilities/pre-process-input.ps1, .lefthook.yml, rules/adaptive/LEARNED-NORMS.md, docs/STACK-STATUS-REPORT.md, rules/NORMATIVAS-ENFORCEMENT.md, .github/workflows/normative-enforcement.yml, scripts/core/engram-policy.ps1, .github/workflows/skill-registry-validation.yml, .github/workflows/sync-public.yml, scripts/utilities/AI-AGENT-MANAGEMENT/agent-router.ps1, scripts/utilities/AGENT/agent-verify.ps1, scripts/utilities/BACKUP-RESTORE/backup-master-key.ps1, scripts/utilities/AUDIT-REPORTING/generate-session-audit.ps1, scripts/utilities/AUDIT-REPORTING/generate-session-artifacts.ps1, scripts/core/import-profile.ps1, scripts/optimization/context-budget-audit.ps1, scripts/utilities/PERFORMANCE-OPTIMIZATION/optimize-context.ps1, scripts/utilities/PERFORMANCE-OPTIMIZATION/run-all-optimizations.ps1

**Learned**: El auditor original era demasiado agresivo — no distinguía entre CLI scripts (donde Write-Host es permitido por normativa) y librerías reutilizables. La solución correcta fue hacer el check context-aware por directorio, no por contenido. El auto-norm-learner no producía salida porque no encontró patrones en Engram — se proveyó seed inicial de 10 normas basadas en trabajo real de la sesión. Las violaciones de hardcoded paths eran en su mayoría ejemplos en comment blocks, no código ejecutable.

---
*Imported from Engram on 2026-09-06*
