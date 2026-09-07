---
created: 2026-08-30 04:05:30
tags: [engram, architecture]
engram_id: 3409
type: architecture
---

# Automated delivery orchestrator architecture

**What**: Diseñé ADR-0022 para un orquestador de delivery TypeScript local-first + GitHub, con CLI, state machine, checkpoints, eventos Nexus/Engram, permisos mínimos, rollback y promoción explícita.
**Why**: Automatizar preflight→review IA→clasificación→staging→commits→rama→push→PR→checks→aprobación→merge/promoción sin bypass, exposición de secretos ni versionado automático.
**Where**: docs/adr/ADR-0022-automated-delivery-orchestrator.md; docs/adr/README.md
**Learned**: La propuesta reutiliza ADR-0017, publication-gates, quality-gates, PR-WORKFLOW y SECRETS-MANAGEMENT; GitHub App con Contents/PR read-write, Checks/Statuses/Metadata read; merge exige aprobación humana y head SHA fresco; external promotion queda manual.

---
*Imported from Engram on 2026-09-06*
