---
created: 2026-08-06 21:20:32
tags: [engram, architecture]
engram_id: 2602
type: architecture
---

# Consolidar CLIs gv duplicados en src/cli/gv.ts

**What**: Decisión de diseño para consolidar los dos CLIs `gv` de Gentle-Vanguard en un único entrypoint canónico `src/cli/gv.ts`, migrando los comandos útiles del legacy `src/gv.ts` y eliminándolo.
**Why**: `src/cli/gv.ts` ya es el canónico de facto (npm `gv`/`cli:gv`, SEA launcher en build-sea.ts, Gentle-Vanguard-Launcher.ts, delegación de gv.ps1/gf.ps1). `src/gv.ts` está huérfano (sin npm script) y sus referencias en config están rotas: quality-gates.json:219 (`-Scope quick` inexistente) y :303 (default=status, no corre tests), testing.config.json (pattern src/gv.ts en 5 testTypes). Ambos tienen comando `health` con comportamiento distinto (footgun) — el cambio parcial ya alineó `health`=watchtower con `--db` para solo Nexus en el canónico.
**Where**: src/cli/gv.ts (canónico, 361 líneas), src/gv.ts (legacy, 407 líneas), src/cli/stack.ts (CLI separado de acceso profundo, se mantiene). Referencias a reparar: config/quality-gates.json, config/testing.config.json, src/hooks/pre-commit.ts + pre-commit-privacy.ts (EXCLUDED_PATHS), src/session-close-validator.ts:598, src/cross-workspace-validator.ts:99, src/quick-start.ts, start.bat, QUICK-START.md, BENCHMARK-START.md, y herramientas de migración (ps1-terminator, mass-ps1-replacer, auto-ps1-fixer, config-ps1-cleaner, skills-ps1-cleaner).
**Learned**: Comandos útiles del legacy a migrar al canónico: session [start|stop|status], dashboard [start|stop|restart|status], status, cleanup, fix [--configs] [--dry-run]. Bugs heredados: dashboard status y cleanup usan puertos hardcodeados (8080/5173/3000) — deben leer .runtime/dashboard-ports.json (puertos dinámicos). session start legacy usa --detached (no bloqueante) — mantener ese comportamiento en `gv`. `src/cli/stack.ts` ya cubre session/dashboard/health/watchtower/validate — `gv` debe delegar a los mismos scripts subyacentes para no duplicar lógica. NO modificar código aún — solo análisis y diseño (simulación SAD).

---
*Imported from Engram on 2026-09-06*
