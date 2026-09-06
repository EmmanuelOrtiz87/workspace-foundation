---
created: 2026-08-21 03:22:11
tags: [engram, architecture]
engram_id: 2935
type: architecture
---

# Bootstrap nativo reproducible

**What**: Implementé un bootstrap nativo idempotente para una distribución checkout: instala lockfile, verifica doctor, inicializa Nexus y hooks, y opcionalmente ejecuta watchtower.
**Why**: Avanzar hacia instalación profesional sin fingir que el SEA actual instala runtimes del sistema ni secretos.
**Where**: src/installer-bootstrap.ts, config/installer-manifest.json, package.json, src/sync-to-public.ts; privado main/develop e4d1b592; público c2bc3ca.
**Learned**: `npm run install:bootstrap -- --dry-run`, typecheck, lint, JSON y README governance pasan. Los logs CI demostraron que los fallos previos eran técnicos (TS5103 y helper ausente), no evidencia de créditos. El NSIS actual sigue obsoleto y no se modificó automáticamente: falta diseñar el bundle SEA/NSIS que provisiona Node o use un runtime embebido, elimina master.key manual y prueba instalación limpia.

---
*Imported from Engram on 2026-09-06*
