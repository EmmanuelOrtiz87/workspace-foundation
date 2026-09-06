---
created: 2026-08-24 10:17:48
tags: [engram, architecture]
engram_id: 3004
type: architecture
---

# Dashboard UI auto-starts with session pipeline (idempotent)

**What**: Dashboard UI (Vite, puerto 5173) ahora arranca automáticamente con el autostart de sesión. Nuevo paso lazy `dashboard-ui-start` en config/session-autostart.config.json que ejecuta `src/dashboard-start.ts --vite-only --quiet --no-browser`. dashboard-start.ts hizo idempotente: sondea el puerto deseado ANTES de getFreePort y si Vite ya sirve lo ADOPTA (log "adopting it (no new process)") en vez de spawnear duplicado en puerto desplazado. También corregida la descripción engañosa del paso dashboard-ws-start (decía "sirve 8080/5173" pero solo levanta el WS).
**Why**: El usuario notó que http://localhost:5173/ no funcionaba sin pedido explícito — el pipeline de 111 pasos solo incluía el WS server, nunca la UI.
**Where**: src/dashboard-start.ts (isHttpOk + guard viteAlreadyUp), config/session-autostart.config.json (paso dashboard-ui-start tras dashboard-ws-start)
**Learned**: getFreePort salta puertos ocupados — para idempotencia hay que sondear el puerto DESEADO antes de pedir uno libre, si no se spawnea duplicado en 5174. Patrón de adopción: probe → adopt | spawn. Los pasos lazy del pipeline corren .ts vía npx tsx detached/windowsHide (compatible procesos-ocultos). Validación: JSON válido, test:config 24/24 PASS, un solo PID tras doble invocación.

---
*Imported from Engram on 2026-09-06*
