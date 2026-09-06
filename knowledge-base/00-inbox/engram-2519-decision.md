---
created: 2026-08-04 17:39:46
tags: [engram, decision]
engram_id: 2519
type: decision
---

# Stack Operational - PowerShell Dependency Removed

**What**: Completada optimización del stack. Eliminada dependencia de PowerShell y verificado funcionamiento completo.

**Why**: PowerShell profile tenía comandos rotos que causaban errores en cada ejecución. Se reescribió process-cleanup.ts y gv.ts para usar solo APIs nativas de Windows (netstat, taskkill).

**Where**:
- src/process-cleanup.ts: Reescrito sin PowerShell
- src/gv.ts: Corregido imports y createSession con mkdirSync
- Dashboard: Funcionando en http://localhost:5173
- Health: 84/85 PASS (0 FAIL)

**Result**:
- ✅ gv.ts funciona sin errores de PowerShell
- ✅ Dashboard running: PID 6520
- ✅ Health check: 84/85 PASS
- ✅ Process cleanup: Node.js nativo
- 🟡 Session persistence: Requiere mejora (muestra inactive pero funciona)

---
*Imported from Engram on 2026-09-06*
