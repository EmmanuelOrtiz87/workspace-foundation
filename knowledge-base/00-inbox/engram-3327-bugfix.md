---
created: 2026-08-29 20:59:32
tags: [engram, bugfix]
engram_id: 3327
type: bugfix
---

# Aislado runner paralelo de tests

**What**: El runner optimizado ahora asigna un directorio temporal de DB por suite y evita ejecutar simultáneamente las suites Unit y Security mediante el grupo exclusivo `process-heavy`; además normaliza `--parallel` a mínimo 1.
**Why**: Bajo concurrencia, tests que lanzan muchos procesos y tests que comparten SQLite producían fallos no deterministas (incluido secret-scanner sin detalle).
**Where**: src/review/test-runner-optimized.ts
**Learned**: La base operativa respeta `GENTLE_VANGUARD_DB_DIR`; aislarla por suite permite conservar paralelismo entre suites independientes sin serializar todo.

---
*Imported from Engram on 2026-09-06*
