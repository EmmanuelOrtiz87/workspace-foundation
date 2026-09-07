---
created: 2026-08-29 05:59:09
tags: [engram, architecture]
engram_id: 3227
type: architecture
---

# F2.5 split watchtower completado

**What**: F2.5 split del watchtower completado — maintenance-watchtower.ts de 2261 → ~470 líneas.
**Why**: Archivos de 1000+ líneas imposibilitan testeo unitario y review; el watchtower es el corazón operativo.
**Where**: src/core/watchtower/ (context.ts, helpers.ts, checks-dashboard/infra/config/security/data.ts, rebuild.ts, index.ts), src/core/maintenance-watchtower.ts (orquestador), tests/unit/maintenance-watchtower.test.ts. Commit fe326e52.
**Learned**: (1) Patrón de split validado: context.ts con estado compartido (results/quiet/exitCode como live bindings ESM + setQuiet/getExitCode), helpers.ts, checks-*.ts por dominio. (2) El test unitario leía el archivo principal — los asserts de testHttp/data.includes('200 OK') viven ahora en checks-dashboard.ts y helpers.ts. (3) checkHiddenSpawns necesita skip del directorio watchtower/ (los patrones literales de detección auto-flagearían los checks). (4) Verificación behavior-preserving: watchtower health 102 PASS/2 WARN/0 FAIL idéntico pre/post split. (5) Artefacto `datetime` en raíz era un volcado de stderr de esbuild — eliminado.

---
*Imported from Engram on 2026-09-06*
