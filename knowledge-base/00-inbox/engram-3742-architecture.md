---
created: 2026-09-06 22:32:39
tags: [engram, architecture]
engram_id: 3742
type: architecture
---

# Watchtower checkMissingScripts proactivo

**What**: Nuevo check `checkMissingScripts()` en `src/core/watchtower/checks-config.ts`, registrado en la lista `checks` de `src/core/maintenance-watchtower.ts`. Lee `.runtime/autostart-missing-scripts.json` (report escrito por el auto-heal del pipeline): PASS si no existe o está vacío; WARN con lista de ids si hay scripts sin resolver; WARN si el JSON es inválido. Acción sugerida: `fix`.
**Why**: Detectar rutas rotas NO resolubles de forma proactiva entre sesiones (no solo en el momento del autostart). Cierra el ciclo auto-evaluación/auto-mejora: pipeline heals + watchtower monitorea residuos.
**Where**: src/core/watchtower/checks-config.ts (imports: RUNTIME_DIR desde ./context, readJson desde ./helpers), src/core/maintenance-watchtower.ts (checks array).
**Learned**: Estado verificado: 125/125 PATADA (0 WARN/FAIL). Verificación negativa validada inyectando un report temporal con 1 script faltante → WARN "1 unresolved: ghost-step". El total del watchtower pasó de 124 a 125 checks.

---
*Imported from Engram on 2026-09-07*
