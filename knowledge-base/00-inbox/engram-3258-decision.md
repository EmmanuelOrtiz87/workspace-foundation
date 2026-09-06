---
created: 2026-08-29 16:03:30
tags: [engram, decision]
engram_id: 3258
type: decision
---

# Directorios canónicos del stack

**What**: Se fijó la separación oficial de productos y documentación del stack.
**Why**: Evitar ambigüedad antes de homologar, migrar y documentar.
**Where**: `apps/academy-web` = documentación de curso; `docs/presentations` = documentación formal publicada; `apps/gv-analytics` = aplicación nativa Analytics; `apps/web-dashboard` = dashboard; CMS = nueva aplicación nativa independiente (ubicación propuesta `apps/content-cms`), mientras `docs/presentations` queda como destino formal/exportado.
**Learned**: El CMS actual embebido en `docs/presentations` no debe seguir siendo el runtime operativo; se conservará para migración/deprecación y el nuevo CMS servirá también como demo.

---
*Imported from Engram on 2026-09-06*
