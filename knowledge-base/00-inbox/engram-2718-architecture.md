---
created: 2026-08-09 22:08:17
tags: [engram, architecture]
engram_id: 2718
type: architecture
---

# Plugin system local-first (plugin-manager)

**What**: Implemented the local-first plugin system (ROADMAP requirement) for Gentle-Vanguard. New `src/plugin-manager.ts` with CLI (list, --status, install, remove, enable, disable, hooks) + hook runner.
**Why**: Requirement "Plugin system local-first — plugins comunitarios sin dependencia cloud, solo git + archivos locales".
**Where**: src/plugin-manager.ts, config/plugin-registry.json, config/plugin-manifest-schema.json (rewritten to new format), plugins/example-hello/ (plugin.json + index.ts + hooks/session-start.ts), package.json (plugin:* scripts), docs/product/PLUGIN-SYSTEM.md, config/session-autostart.config.json (lazy step plugin-registry-load).
**Learned**: (1) SEGURIDAD — hooks/entries se lanzan como subprocesos vía runNpxTsxSync/runSync (src/core/run-command.ts), NUNCA import dinámico en el proceso principal. (2) El manifest usa id kebab-case + version semver + entry (fallback a main/index.ts para compat FF-011 legacy). (3) Estado enable/disable persistido en config/plugin-registry.json (prioridad sobre manifest.enabled); config/plugins.json solo define pluginsPaths + security policy. (4) El plugin legacy plugins/example-hello-world (main: hello-world.ps1 inexistente) se descubre pero se marca inválido. (5) install usa git clone --depth 1 via runSync; path local via fs.cpSync. Todos los gates pasan: typecheck 0, lint 0, hooks OK.

---
*Imported from Engram on 2026-09-06*
