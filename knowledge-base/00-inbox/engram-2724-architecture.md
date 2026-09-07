---
created: 2026-08-09 22:40:39
tags: [engram, architecture]
engram_id: 2724
type: architecture
---

# 3 módulos experimentales activados con gobernanza completa

**What**: Activados formalmente 3 módulos experimentales bajo el MODULE-ACTIVATION-WORKFLOW: root-cause-correlator (beta, medium, self-diag-agent), convergence-monitor (experimental, medium, orchestrator), fine-tuning-collector (experimental, high, ops-agent). Cada uno con decisión formal en docs/governance/activation-decisions/<id>.md, 6/6 gates satisfied (tests, typecheck, lint, security-scan, governance-approval, owner-signoff), y activated:true en config/module-maturity.json.

**Why**: El plan exigía avanzar la Fase 1 de gobernanza: pasar los módulos experimentales del estado "propuesta" al estado "activado" con verificación real, no solo teórica.

**Where**: config/module-maturity.json (activated:true en 3 módulos), docs/governance/activation-decisions/{root-cause-correlator,convergence-monitor,fine-tuning-collector}.md, src/module-maturity.ts.

**Learned**: El workflow de madurez tiene 2 vías de sign-off: marcar activated:true en el config (vía real) o pasar --ownerSignoff (simulación). La validación confirma "already activated — all gates satisfied" cuando todos los criterios pasan. Los scripts reales fueron verificados operacionalmente: root-cause-correlator produce clusters de correlación, convergence-monitor rastrea estabilidad de decisiones (13 config changes), fine-tuning-data-collector recogió 6 records de 289 sesiones a .ft/dataset/raw/. Commit 5a75d2ab.

---
*Imported from Engram on 2026-09-06*
