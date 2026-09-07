---
created: 2026-08-09 19:02:11
tags: [engram, bugfix]
engram_id: 2709
type: bugfix
---

# CI Tests job verde: 4 tests de unit arreglados con patrón self-contained

**What**: El job "Tests" del CI (GitHub Actions, runner Ubuntu) fallaba con "4 passed, 1 failed" sin detalle. Se arreglaron 4 tests de unit que dependían del estado local del workspace:
1. `src/test-runner-optimized.ts`: bug de observabilidad — en modo no-verbose nunca imprimía el output de suites fallidas (solo "N passed, 1 failed"). Se añadió bloque "FAILED SUITES — full output" que imprime el output completo → el CI ahora revela el test exacto.
2. `tests/unit/adapters.test.ts`: `runSync` usaba `'cmd', ['/c', 'exit', '3']` hardcodeado a Windows → fallaba en Ubuntu. Fix: `process.platform === 'win32' ? cmd : sh -c`.
3. `tests/unit/audit-pipeline.test.ts`: dependía de `.session/audit` preexistente (lazy step local). Fix: verificar contrato del módulo TS `src/infrastructure/audit-pipeline.ts` (imports, newAuditEvent, saveAuditEvent crea dirs con mkdirSync recursive, getStatus read-only).
4. `tests/unit/checkpoint-manager.test.ts`: dependía de `.session/checkpoints` preexistente. Fix: usar temp root (`os.tmpdir()`) con `createCheckpoint(rootInput)` que acepta root custom — no ensucia el workspace.
5. `src/web-crawler.ts` `health()`: bug real — degradaba a 'degraded' cuando el dir de caché faltaba aunque `cacheEnabled:false` (el caché no se usa). Fix: `cacheOk = !this.config.cacheEnabled || cacheDir`.

**Why**: CI en Ubuntu corre en runner limpio sin los dirs `.session/*` que los lazy steps crean localmente. El patrón "test verifica estado preexistente del workspace" es frágil en CI.

**Where**: src/test-runner-optimized.ts, tests/unit/adapters.test.ts, tests/unit/audit-pipeline.test.ts, tests/unit/checkpoint-manager.test.ts, src/web-crawler.ts

**Learned**: Patrón para tests CI-robustos: (a) verificar el CONTRATO del módulo TS (exports + comportamiento) en vez de estado del workspace; (b) usar directorio temporal para operaciones que escriben; (c) el health() de servicios con cache opcional debe reportar ok si cacheEnabled:false aunque el dir no exista. Resultado: 239/239 unit PASS local, CI 100% verde, ramas homologadas.

---
*Imported from Engram on 2026-09-06*
