---
created: 2026-08-29 22:07:35
tags: [engram, architecture]
engram_id: 3354
type: architecture
---

# Retención local segura de artefactos

**What**: Implementé retención local de 30 días con dry-run por defecto, manifests Zod, allowlist/denylist explícita, auditoría local/Nexus/Engram y apply protegido por autorización de cierre automatizado.
**Why**: Evitar borrar artefactos sin ownership/fecha confiable y preservar históricos, vault, snapshots y backups requeridos.
**Where**: src/session/artifact-retention.ts, src/session/session-close/index.ts, src/session/session-close/phases.ts, config/artifacts-retention.json, rules/SESSION-CLOSE-NORMATIVA.md, tests/unit/artifact-retention.test.ts, package.json
**Learned**: Solo las entradas con retention-manifest.json válido, owner coincidente, createdAt ISO y temporary=true pueden expirar; `GV_RETENTION_APPLY_AUTHORIZED=1` solo habilita apply para razones session-end/day-end-closure. No se ejecutó borrado real sobre el workspace.

---
*Imported from Engram on 2026-09-06*
