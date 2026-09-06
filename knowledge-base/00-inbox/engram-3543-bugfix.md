---
created: 2026-08-31 20:09:12
tags: [engram, bugfix]
engram_id: 3543
type: bugfix
---

# engram-sync regenera checksums cuando la DB es más nueva (bug estructural resuelto)

**What**: Fix del bug estructural en src/knowledge/engram-auto-sync.ts (commit 557897e8): (1) checkSynchronization() comparaba TIMESTAMPS y hacía return false cuando la DB era más nueva que los checksums — pero la DB de engram se escribe en CADA mem_save, así que en sesiones activas SIEMPRE estaba "desactualizada" y el sync fallaba estructuralmente; ahora regenera checksums (syncChecksums() con lock) y verifica. (2) runIntegrityScript migrado de runSyncShell + string `npx tsx` (cmd.exe, procesos-ocultos violation) a runNpxTsxSync array-form. (3) Variable muerta integrityScript eliminada.
**Why**: `npm run engram:sync` fallaba SIEMPRE en sesiones activas (exit 1 estructural) aunque el integrity check directo pasara — el WARN de reindex freshness del watchtower era síntoma.
**Where**: src/knowledge/engram-auto-sync.ts
**Learned**: (1) Herramientas de verificación sobre datos VIVOS (DB que se escribe constantemente) no pueden usar comparación de timestamps como criterio de fallo — deben REGENERAR y verificar. (2) El modo repair del integrity-check solo repara checksums FALTANTES, no MISMATCHES — para regenerar: `-Mode checksums`. (3) runSyncShell/runNpxTsxSync devuelven {status, stdout, stderr} — el shape es correcto, el bug era de diseño no de adapter. (4) Watchtower: 0 FAIL tras el fix; los WARNs residuales (reindex freshness se auto-cura en autostart, unknown-repo-process es report-only) son informativos.

---
*Imported from Engram on 2026-09-06*
