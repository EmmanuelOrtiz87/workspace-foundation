---
created: 2026-08-29 05:01:36
tags: [engram, bugfix]
engram_id: 3224
type: bugfix
---

# N9 routing learning loop completo + bugs adaptive-router

**What**: Fase 6 N9 completada: loop de aprendizaje de routing con test E2E file-based + diagrama. Se corrigieron 2 bugs latentes en src/orchestration/adaptive-router.ts.
**Why**: El plan pedía cerrar el circuito delegación → metrics-report.json → adaptive-router → routing-table.json → recommend-agent con cobertura E2E y documentación visual.
**Where**: src/orchestration/adaptive-router.ts, tests/unit/routing-learning-loop-file.test.ts, docs/architecture/routing-learning-loop.html. Commits a3c1343d + de01199c.
**Learned**:
1. Bug doble-join: `join(ROOT, config.outputDir)` concatena rutas absolutas cuando outputDir es absoluto (fallback DEFAULT_CONFIG) → ENOENT. Fix: `isAbsolute(config.outputDir) ? config.outputDir : join(ROOT, config.outputDir)`. El config real usa relativo (".session/routing") por eso no se manifestaba.
2. Bug ratio colapsado: collectDelegations colapsaba total/successes/failures a UN registro binario (success: successes > failures), perdiendo el ratio real (1/5 → 0.0 en vez de 0.2). Fix: emitir un registro por unidad de trabajo.
3. Patrón test E2E con cwd temporal: `--import tsx` resuelve relativo al cwd → usar ruta absoluta al loader `node_modules/tsx/dist/loader.mjs` como file:// URL (pathToFileURL), Windows rechaza rutas planas (ERR_UNSUPPORTED_ESM_URL_SCHEME).
4. El Nexus DB es module-relative (siempre alcanzable) y tiene regla real 'general' → api-and-interface-design que secuestra el path file-based. Aislar con GENTLE_VANGUARD_TENANT_ID=test-e2e-tenant-xyz (0 reglas → cae al routing-table).
5. recommend-agent emite ruido [DB] antes del JSON → parsear extrayendo {...}.

---
*Imported from Engram on 2026-09-06*
