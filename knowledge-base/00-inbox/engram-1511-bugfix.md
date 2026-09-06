---
created: 2026-07-10 04:01:24
tags: [engram, bugfix]
engram_id: 1511
type: bugfix
---

# Stack autónomo reparado: session-autostart auto-trigger + 5 fixes

**What**: Reparado el stack autónomo completo. Session-autostart no se ejecutaba automáticamente al inicio de sesión. 5 fixes aplicados.

**Why**: OpenCode no tiene lifecycle hook para session-start. El AGENTS.md no tenía instrucción que le dijera al agente que ejecutara session-autostart. AI-NORMATIVES.md referenciaba archivos .cmd/.sh que no existían. Watchtower usaba cmd.exe que fallaba con paths de Windows. 3 scripts tenían paths incorrectos en la config.

**Where**: AGENTS.md, rules/AI-NORMATIVES.md, config/session-autostart.config.json, src/maintenance-watchtower.ts

**Learned**:
- OpenCode depende de AGENTS.md como system instructions — sin instrucción explícita, el agente NO ejecuta autostart
- execFileSync bypass shell y resuelve el problema de quoting de paths con espacios en Windows
- Engram doctor necesita 20s timeout (no 10s) para completar en Windows
- cmd.exe como shell en Node.js execSync falla con paths de Windows — usar execFileSync directamente
- Dashboard WS PID files quedan stale cuando el server arranca sin el watchdog — limpiar manualmente
- 3 scripts en autostart config tenían paths incorrectos: skill-recommender, check-skill-sizes, digest-generator

---
*Imported from Engram on 2026-09-06*
