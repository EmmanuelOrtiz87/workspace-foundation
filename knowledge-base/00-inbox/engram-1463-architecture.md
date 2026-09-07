---
created: 2026-07-02 13:43:36
tags: [engram, architecture]
engram_id: 1463
type: architecture
---

# Stack repair session — July 2026: 0 FAIL 0 WARN

**What**: Reparación completa del stack Gentle-Vanguard — watchtower pasó de 68P/3W/4F a 74P/0W/0F. Se corrigieron 4 FAIL y 3 WARN.
**Why**: El usuario reportó errores recurrentes en dashboard WS, parse errors en engram-vector-index.ps1, y falta de skill-registry.md.
**Where**:
- scripts/utilities/memory/ENGRAM-RAG/engram-vector-index.ps1 — reescrito completo (tenía 4 copias duplicadas por catch block con string sin cerrar)
- scripts/utilities/dashboard/dashboard-ws-autostart.ps1 — agregada limpieza automática de stale PIDs al inicio
- .atl/skill-registry.md — creado con 10 skills mapeadas desde opencode.json
- .runtime/ — PID files stale limpiados, port mismatch corregido (8081→8080)
**Learned**:
- Dashboard WS watchdog no persiste al reinicio de PC. Stale PID files en .runtime/ causan port mismatch recurrente. El fix permanente es limpiar stale PIDs al inicio del watchdog.
- engram-vector-index.ps1 se corrompió por un string sin cerrar en un catch block que duplicó el código interno. Archivos PowerShell largos (>500 líneas) tienen riesgo de este tipo de corrupción si se editan manualmente.
- skill-registry.md debe ser generado automáticamente o versionado en git. Actualmente no está en el repo.
- Validate-stack confirmado: hashline OK (498 files, 429K líneas), pre-process-input OK (HasMatch=True), session-start parse OK.

---
*Imported from Engram on 2026-09-06*
