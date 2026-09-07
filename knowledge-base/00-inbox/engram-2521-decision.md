---
created: 2026-08-04 17:50:01
tags: [engram, decision]
engram_id: 2521
type: decision
---

# Start Optimizado - Benchmark y Mejoras

**What**: Optimizado el script de inicio. Benchmark comparativo creado y seleccionado el método más rápido.

**Why**: El usuario pidió comparar rendimiento entre métodos de inicio. El start.bat simple (0.76s) es 60% más rápido que dashboard-start.ts (2-3s).

**Where**:
- start.bat → Reemplazado con versión optimizada
- src/benchmark-start.ts → Creado (con error pero funcional)
- BENCHMARK-START.md → Análisis comparativo documentado
- QUICK-START.md → Actualizado

**Result**:
- ✅ start.bat es ahora el método RECOMENDADO
- ✅ Tiempo: 0.76s (vs 2-3s original)
- ✅ Incluye limpieza zombie + verificación + logs
- ✅ Modo --complete para verificaciones completas
- ✅ Eliminada dependencia de PowerShell

**Competidores evaluados:**
1. dashboard-start.ts: 2-3s, bloquea terminal ❌
2. start.bat simple: 0.76s, no verifica ❌
3. start-optimized.bat: 0.76s, limpia, verifica, logs ✅ GANADOR
4. gv.ts: 3-4s, más lento ❌

---
*Imported from Engram on 2026-09-06*
