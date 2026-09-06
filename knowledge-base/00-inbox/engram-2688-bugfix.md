---
created: 2026-08-09 04:32:23
tags: [engram, bugfix]
engram_id: 2688
type: bugfix
---

# Delegador cross-platform Windows (npx.cmd + shellQuote)

**What**: Fix cross-platform del delegador nativo: spawn('npx') falla con ENOENT en Windows (npx es npx.cmd), spawn('npx.cmd') da EINVAL sin shell, y shell:true concatena args rompiendo tasks con espacios (DEP0190).
**Why**: src/agent-delegator.ts no podía ejecutar ningún agente nativo en win32 — bloqueaba operar con los 9 agentes de dominio.
**Where**: src/agent-delegator.ts — resolveNpx() (npx.cmd en win32), shellQuote() (comillas dobles duplicadas en cmd.exe, single-quote en POSIX), runNativeAgent() construye comando completo como string + shell:true + windowsHide:true.
**Learned**: La solución correcta en Windows es pasar el COMANDO COMPLETO ya quoteado a spawn(command, {shell:true}) — no args separados. Verificado: task "Analyze the new landing page copy" llega completo (antes se truncaba a "Analyze"). Sin deprecation warning.

---
*Imported from Engram on 2026-09-06*
