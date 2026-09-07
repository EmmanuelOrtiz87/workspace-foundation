---
created: 2026-08-04 16:28:57
tags: [engram, bugfix]
engram_id: 2513
type: bugfix
---

# Fix Broken PS1 References - Batch 1 (3 files)

**What**: Progreso en reparación de referencias PS1 rotas. Se completaron 3 archivos críticos:
- src/bootstrap.ts:232 - codegraph-sync-autostart.ps1 → .ts (cambiado a npx tsx src/codegraph-sync-autostart.ts)
- src/bootstrap-machine.ts:338 - gv.ps1 → gv.ts (actualizado template CLI wrapper a TypeScript)
- src/check-security.ts:22-32 - 5 referencias a PS1 actualizadas a TS (pre-commit.ts, pre-commit-privacy.ts, check-security.ts, gv.ts, hook-output-safety eliminado)

**Why**: Quedan ~220 referencias rotas restantes. Se necesita continuar con correcciones quirúrgicas.

**Where**: Archivos modificados:
- src/bootstrap.ts (linea 232, 234)
- src/bootstrap-machine.ts (linea 338, 339)
- src/check-security.ts (linea 22-32)

**Learned**: Las correcciones deben ser quirúrgicas y verificadas. Algunos scripts migrados usan diferente sintaxis (PS vs TS).

---
*Imported from Engram on 2026-09-06*
