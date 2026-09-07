---
created: 2026-08-31 03:21:27
tags: [engram, bugfix]
engram_id: 3442
type: bugfix
---

# Delivery resume E2E regression

**What**: Añadida `tests/e2e/delivery-resume.test.ts`, que crea un DeliveryStateMachine con runId temporal, persiste sourceSha del HEAD, invoca el CLI con `process.execPath --import tsx` y `windowsHide:true`, valida resume exitoso y después exit 6 con mensaje de cambio de HEAD; limpia el run directory en finally.
**Why**: Cubrir end-to-end la protección de integridad de source HEAD durante `delivery resume`.
**Where**: tests/e2e/delivery-resume.test.ts, src/delivery/state-machine.ts
**Learned**: `DeliveryStateMachine.resume()` no debe emitir `delivery.started`, porque añadir ese evento al log rompe la cadena de integridad antes de validar el checkpoint; se añadió el parámetro interno `emitStarted=false` para la ruta de resume.

---
*Imported from Engram on 2026-09-06*
