---
created: 2026-08-09 22:11:51
tags: [engram, architecture]
engram_id: 2720
type: architecture
---

# Backlog completo implementado: madurez, offline, plugin, template

**What**: Implementados todos los pendientes del stack Gentle-Vanguard en una sesión:
1. Fase 1 madurez: config/module-maturity.json (24 módulos: 14 core/8 experimental opt-in/2 deprecated) + src/module-maturity.ts (CLI list/--status/--validate/--gate) + docs/governance/MODULE-ACTIVATION-WORKFLOW.md + step lazy module-maturity-validate
2. Dashboard offline: apps/web-dashboard/src/lib/offlineCache.ts (localStorage, cap 200KB, staleness 5min) + useMetrics.ts/useAlerts.ts con isOffline+lastUpdated + banner amber en Dashboard.tsx + caché en TracingDashboard.tsx
3. Auto-update fix: src/check-version.ts apuntaba al repo privado EmmanuelOrtiz87/gentle-vanguard (404). Ahora apunta a gentle-vanguard-public (8 releases, latest v3.4.0) con override GENTLE_VANGUARD_GH_REPO
4. create-gentle-vanguard: src/create-gentle-vanguard.ts (dry-run 1411 archivos, ignore list) + 12 tests unit + docs
5. Plugin system local-first: src/plugin-manager.ts (descubrimiento plugins/ + ~/.gentle-vanguard/plugins, manifest plugin.json, hooks en procesos separados por seguridad, registry en config/plugin-registry.json) + plugins/example-hello/ + step lazy plugin-registry-load
6. 40 skills migradas .opencode/skills → skills/ (175 nativas total)

**Why**: Mandato del usuario de avanzar con todo el backlog del ROADMAP (Fase 1 + mejoras Local-First), operando con todas las herramientas y creando capacidad nativa si falta.

**Where**: config/module-maturity.json, src/module-maturity.ts, src/check-version.ts, src/create-gentle-vanguard.ts, src/plugin-manager.ts, apps/web-dashboard/src/lib/offlineCache.ts, apps/web-dashboard/src/hooks/useMetrics.ts, apps/web-dashboard/src/components/Dashboard.tsx, docs/product/{CREATE-GENTLE-VANGUARD,PLUGIN-SYSTEM}.md, docs/governance/MODULE-ACTIVATION-WORKFLOW.md

**Learned**: All quality gates verdes: typecheck 0, lint 0, tests 5/5, watchtower 89/89. El step lazy module-maturity-validate y plugin-registry-load se añadieron a config/session-autostart.config.json sin romper el formato.

---
*Imported from Engram on 2026-09-06*
