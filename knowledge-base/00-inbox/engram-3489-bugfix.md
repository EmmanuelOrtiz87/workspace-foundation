---
created: 2026-08-31 15:27:16
tags: [engram, bugfix]
engram_id: 3489
type: bugfix
---

# Widget CC: two-click stop reemplaza confirm() suprimible + errores visibles

**What**: Fix del widget del CC que "no apagaba nada": eliminada la dependencia de confirm() — reemplazada por patrón two-click (1er click arma → "¿Seguro? Click de nuevo" en ámbar, 3s timeout desarma → 2do click ejecuta). Errores ahora se surfacean visualmente en el badge (borde rojo 2.5s + title con el mensaje), no solo console.warn.
**Why**: El usuario reportó que el widget se veía pero al hacer click no apagaba nada, sin error visible. El server estaba perfecto (POST con Origin verificado con curl: 200 + ACAO + stop real). Causa: confirm() suprimido por el browser (checkbox "impedir más diálogos" de Chrome o extensiones) devuelve false en silencio → return sin acción ni error.
**Where**: apps/command-center/public/widget.js
**Learned**: (1) NUNCA depender de confirm()/alert() para acciones críticas de UI embebida — los browsers las suprimen silenciosamente; usar patrón two-click arm/disarm. (2) Diagnóstico: verificar server con curl simulando el browser (Origin header) ANTES de tocar código — aisló el problema al cliente en un paso. (3) widget.js se sirve con readFileSync fresco + no-store → los fixes quedan vivos sin reiniciar el CC. (4) Commit d8f0b99a.

---
*Imported from Engram on 2026-09-06*
