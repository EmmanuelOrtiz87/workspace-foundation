---
created: 2026-05-30 05:24:52
tags: [engram, architecture]
engram_id: 1232
type: architecture
---

# Auto-backup hook en session-manager

**What**: Agregado auto-backup hook de engram en session-manager.ps1: al cerrar sesión (End-Session), se ejecuta automáticamente backup-engram.ps1 -Mode backup. Cumple NORMATIVA-ENGRAIN-BACKUP R1.

**Why**: Garantizar que toda sesión respalde la memoria persistente al cerrar, sin intervención manual.

**Where**: scripts/utilities/SESSION/session-manager.ps1 — después del pre-close validator, antes de persist metrics (~línea 434). También se integró optimization stack check en health-check.ps1 y CI workflow.

**Learned**: Engram almacena datos en SQLite (engram.db ~1.5MB), no en JSON. backup-engram.ps1 se corrigió para copiar el archivo SQLite directamente + Git commit automático en .engram-data/. Backup verify verifica integridad del archivo .db.

---
*Imported from Engram on 2026-09-06*
