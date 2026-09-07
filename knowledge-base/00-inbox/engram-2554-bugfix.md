---
created: 2026-08-05 19:34:04
tags: [engram, bugfix]
engram_id: 2554
type: bugfix
---

# FIX: Eliminación de referencias PowerShell rotas - Migración PS1→TS

**What**: Corrección urgente de referencias a scripts PowerShell (.ps1) que causaban errores `ChildProcess.kill` al intentar ejecutar comandos inexistentes.

**Why**: La migración PS1→TS (Wave 24) eliminó 390+ scripts PowerShell, pero quedaron referencias en:
- Configuraciones de agentes (.codex/config.json, .antigravity/config.json)
- APIs del dashboard (knowledge-api.ts, mesh-api.ts, mcp-gateway-api.ts)
- El error ocurría cuando se intentaba ejecutar `pwsh -Command "..."` con scripts que ya no existen

**Where**:
1. `.codex/config.json` (líneas 52, 79) - Actualizado a `npx tsx src/*.ts`
2. `.antigravity/config.json` (líneas 54, 76) - Actualizado a `npx tsx src/*.ts`
3. `apps/web-dashboard/server/mcp-gateway-api.ts` - Reemplazado `pwsh` por `tsx()`, cambiado paths de scripts
4. `apps/web-dashboard/server/knowledge-api.ts` - Reescrito como stub sin dependencias PowerShell
5. `apps/web-dashboard/server/mesh-api.ts` - Reemplazado `Get-Process` por `process.kill(pid, 0)`, eliminado mcp-mesh-scan.ps1 references

**Learnings**:
- El problema NO era PowerShell en sí, sino referencias a scripts .ps1 que fueron migrados a TS
- Quedan 308 referencias rotas en config JSONs y skills (requieren actualización masiva)
- Tipo de error: `ChildProcess.kill` cuando el proceso PowerShell falla al iniciar
- Solución: Migrar ejecución de `pwsh -File script.ps1` a `npx tsx src/script.ts`
- Dashboard APIs ahora usan métodos nativos de Node.js (`process.kill(pid, 0)` para verificar procesos)
- TypeScript build pasa exitosamente: `npm run typecheck` y dashboard `npx tsc --noEmit`

---
*Imported from Engram on 2026-09-06*
