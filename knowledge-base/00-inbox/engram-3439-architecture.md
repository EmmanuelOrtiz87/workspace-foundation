---
created: 2026-08-31 03:17:23
tags: [engram, architecture]
engram_id: 3439
type: architecture
---

# Delivery resume source integrity

**What**: Persistí `sourceSha` en `DeliveryCheckpoint` y añadí validación en `resumeFlow`: si el HEAD fuente cambió desde el checkpoint, la reanudación se bloquea de forma segura. Se mantiene compatibilidad con checkpoints antiguos mediante campo opcional.
**Why**: Hacer `delivery:resume` reproducible y evitar reanudar sobre una fuente distinta a la que fue revisada/materializada.
**Where**: `src/delivery/types.ts`, `src/delivery/cli.ts`.
**Learned**: El hash de workspace no sustituye al SHA fuente; ambos controles son necesarios (contenido local + identidad del commit). Verificado con typecheck, lint y 7 pruebas focalizadas.

---
*Imported from Engram on 2026-09-06*
