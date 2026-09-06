---
created: 2026-08-31 13:25:27
tags: [engram, bugfix]
engram_id: 3478
type: bugfix
---

# CC UI: no-store + error surfacing global (fix apps no cargaban)

**What**: Fix de resiliencia de la UI del Command Center: (1) ruta static ahora envía Cache-Control: no-store, (2) handlers globales window.onerror + unhandledrejection en index.html que muestran CUALQUIER error JS en el div de error visible de la grilla.
**Why**: El usuario reportó que las apps no cargaban en 127.0.0.1:8090 sin error visible. Causa probable: browser cacheó una versión intermedia rota de index.html (el static route no enviaba Cache-Control y el archivo iteró mientras había un CC vivo). Sin handler global de errores, cualquier fallo JS dejaba la grilla en "Cargando aplicaciones…" en silencio.
**Where**: src/ops/command-center/server.ts (ruta static), src/ops/command-center/public/index.html (handlers globales)
**Learned**: (1) Todo static route de una UI en evolución DEBE enviar Cache-Control: no-store — una copia cacheada rota falla en silencio. (2) Toda UI standalone debe tener window.onerror + unhandledrejection visibles en la UI, no solo en consola. (3) Diagnóstico: verificar server API con PowerShell primero (funcionaba) → aislar el problema al cliente; new Function(script) para descartar sintaxis; lo que queda es runtime/cache del navegador.

---
*Imported from Engram on 2026-09-06*
