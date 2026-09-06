---
created: 2026-09-01 17:39:16
tags: [engram, bugfix]
engram_id: 3581
type: bugfix
---

# Fix: Command Center UI freeze - botones grisados permanentemente

**What**: Se resolvió el bug crítico en Command Center donde los botones de inicio/parada de apps quedaban permanentemente deshabilitados (grisados) después de iniciar cualquier app.

**Why**: El problema tenía dos causas:
1. La función `render()` tenía optimización que retornaba temprano si los datos (snapshot) no habían cambiado (`snapshot === lastSnapshot`), por lo que al setear `busy = id` y llamar `render()`, los botones no se actualizaban visualmente.
2. El `finally` bloque intentaba `await load()` que podía fallar, dejando `busy` sin limpiar correctamente.

**Where**: Archivos modificados:
- `apps/command-center/public/index.html` (frontend JavaScript UI) - múltiples funciones actualizadas
- `apps/command-center/server.ts` (backend API - se agregó registro de design-catalog)
- `package.json` (scripts npm para design-catalog)

**Learned**:
- La solución requirió crear función `refreshButtons()` separada que actualiza el DOM directamente sin depender de la lógica de optimización de `render()`
- Se agregó protección contra clicks múltiples con `if (busy) return` guard
- Se implementó `setTimeout(refreshButtons, 100)` en finally para capturar updates asíncronos
- Se mejoró `updateCard()` para detectar si la app específica está busy vs otra app busy
- Timeout en fetch requests: 10s para load(), 20s para toggle(), 30s para preset()

---
*Imported from Engram on 2026-09-06*
