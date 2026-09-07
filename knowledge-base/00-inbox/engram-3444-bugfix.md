---
created: 2026-08-31 03:22:17
tags: [engram, bugfix]
engram_id: 3444
type: bugfix
---

# End-to-end delivery resume guard

**What**: Añadí `tests/e2e/delivery-resume.test.ts` que ejecuta el CLI real con `process.execPath --import tsx`, verifica resume con sourceSha vigente y bloqueo exit 6 cuando cambia el HEAD; además `DeliveryStateMachine.resume()` ya no emite un evento espurio que rompía la cadena hash.
**Why**: Completar la validación operativa de checkpoints y evitar reanudaciones no reproducibles.
**Where**: `tests/e2e/delivery-resume.test.ts`, `src/delivery/state-machine.ts`.
**Learned**: La reanudación debe reconstruir la máquina sin generar eventos de inicio adicionales; la cadena de auditoría debe conservarse exactamente al cargar checkpoints.

---
*Imported from Engram on 2026-09-06*
