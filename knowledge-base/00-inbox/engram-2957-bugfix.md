---
created: 2026-08-22 13:32:43
tags: [engram, bugfix]
engram_id: 2957
type: bugfix
---

# Suite integración es node:test NO vitest

**What**: Push Checks / Integration Tests fallaba los 11 suites con "No test suite found in file". docker-compose.test.yml corría `pnpm vitest run tests/integration/` pero TODOS los tests de integración importan de `node:test`.
**Why**: La convención del stack para tests TS/JS es `npx tsx --test` (ver scripts container:test, test:e2e, test:config en package.json). Vitest solo se usa para eval (vitest.eval.config.ts) y dashboard. Vitest no registra suites de node:test → colección vacía.
**Where**: docker-compose.test.yml — comando final: `npx tsx --test tests/integration/*.test.ts tests/integration/*.test.js`. Commits ea081373 + 51440190.
**Learned**: Al agregar tests al contenedor de integración usar siempre tsx --test. GOTCHA: tsx --test NO escanea directorios — resolver `tests/integration/` como módulo index.ts (ERR_MODULE_NOT_FOUND); pasar globs que el sh expande o lista explícita de archivos. api-health.test.js tiene skip guards node:test-nativos (`{ skip: reason }`) + probe top-level a /api/health; el compose arranca el WS server en background con wait-for-port antes de correr tests. RESULTADO FINAL: Push Checks 24/24 verde (run 32576790830) tras esta corrección.

---
*Imported from Engram on 2026-09-06*
