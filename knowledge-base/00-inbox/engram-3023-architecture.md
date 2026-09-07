---
created: 2026-08-24 15:56:39
tags: [engram, architecture]
engram_id: 3023
type: architecture
---

# Dashboard runtime telemetry and session freshness UI

**What**: Home del dashboard ahora muestra métricas internas reales mediante `DashboardRuntimeHealth`: requests HTTP, errores/error rate, latencia media y pico de conexiones WS, refresco cada 15s cancelable. Lifecycle de sesiones mejorado: `active`, `idle`, `stale` (>5min sin actividad) y `completed`, con `lastActivity` visible en SessionTable.
**Why**: Cerrar los pendientes de observabilidad interna y evitar que sesiones persistidas antiguas aparezcan como activas indefinidamente.
**Where**: apps/web-dashboard/src/components/DashboardRuntimeHealth.tsx, Dashboard.tsx, SessionTable.tsx, hooks/useSessions.ts, types/dashboard.ts, hooks/useLocale.ts
**Learned**: El poller de runtime debe mantener el AbortController actual en ref; abortar el controller inicial sin reemplazar la referencia dejaba requests posteriores sin cleanup. La suite de dashboard emite warnings Recharts de dimensiones 0 solo en JSDOM, pero 52/52 tests pasan.
**Validation**: typecheck/lint raíz PASS; dashboard i18n 402 keys, build/lint/52 tests PASS; runtime health real: 2264 requests, 0 errores, avg 8.76ms, max 1702ms, WS peak 4, Vite 200. Commit f4b0e71d.

---
*Imported from Engram on 2026-09-06*
