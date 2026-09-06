---
created: 2026-08-31 14:38:37
tags: [engram, bugfix]
engram_id: 3482
type: bugfix
---

# calendar_slots CHECK no admite rejected — usar skipped

**What**: calendar_slots status CHECK in SQLite es ('proposed','confirmed','published','skipped') — 'rejected' NO es valor válido; transiciones rejected rompían con "CHECK constraint failed" (500). Se alineó apps/content-cms/server/server.ts (SLOT_TRANSITIONS + validateSlotTransition exportado) y la UI (skipped=rechazar, published=púrpura).
**Why**: La UI previa y el mapa de transiciones usaban 'rejected' que la DDL (MigrationRunner.ts, web-dashboard) nunca permitió.
**Where**: apps/content-cms/server/server.ts, apps/content-cms/src/contentos.tsx, apps/content-cms/server/server.test.ts
**Learned**: Antes de modelar estados de slot, verificar el CHECK de la DDL en web-dashboard/server/database/repositories/MigrationRunner.ts (~línea 646).

---
*Imported from Engram on 2026-09-06*
