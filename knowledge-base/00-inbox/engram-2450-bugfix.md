---
created: 2026-08-01 07:36:50
tags: [engram, bugfix]
engram_id: 2450
type: bugfix
---

# Watchtower 82/82: check audit distingue estado inicial de inconsistencia

**What**: La watchtower (src/Core/maintenance-watchtower.ts, checkAuditPipeline) marcaba WARN por falta de .session/audit/index.json aunque el directorio de logs estuviera vacío (0 eventos). El index.json solo se crea al guardar el primer evento (saveAuditEvent en src/infrastructure/audit-pipeline.ts). Fix: lógica de 3 estados — (1) índice existe → PASS "Available"; (2) hay .jsonl pero falta índice → WARN "No index (events present)"; (3) sin eventos → PASS "No events yet (index pending)". Verificado: watchtower 82/82 PASS, 0 WARN, 0 FAIL.
**Why**: Estado inicial legítimo (sin eventos de auditoría) no debe reportarse como warning — era el único WARN del stack (81/82 → 82/82).
**Where**: src/Core/maintenance-watchtower.ts (checkAuditPipeline). Commit a4619f94.
**Learned**: PATRÓN REUTILIZABLE: los checks de salud deben distinguir "estado inicial/no aplicable" de "inconsistencia real". Un check que espera un artefacto derivado (índice, caché, reporte) como obligatorio siempre produce falsos positivos hasta que el primer evento lo genera. Nota: git trackea el path como src/Core/ (capital C) — usar git ls-files para confirmar casing antes de git add en Windows.

---
*Imported from Engram on 2026-09-06*
