---
created: 2026-07-30 17:10:49
tags: [engram, decision]
engram_id: 2282
type: decision
---

# Local-First Preference Normative Definition

**What**: Definición de normativa LOCAL-FIRST-PREFERENCE.md como guía flexible (no estricta) para evolución del stack.

**Why**: El usuario confirma filosofía "hacia adentro": mejorar lo existente vs expandir hacia cloud/external SaaS. Las dependencias externas deben ir a backlog con flag "requires-approval".

**Where**: Nueva normativa en rules/LOCAL-FIRST-PREFERENCE.md + backlog items clasificados.

**Learned**:
- Normativa debe ser PREFERENCE no MANDATORY
- Excepciones posibles con confirmación explícita
- Backlog debe clasificar: local-improvements vs external-dependencies
- Proceso: todo feature externo → backlog → approval gate → implementación

**Backlog Items Creados**:
1. BL-MS7RRUM3-IH25: VS Code Extension (EXTERNAL) - requires approval
2. BL-MS7RS05R-BZVR: Plugin Registry Cloud (EXTERNAL) - requires approval  
3. BL-MS7RS0IY-68UR: FIX Dashboard WS auto-restart (LOCAL) - implementar
4. BL-MS7RS0BQ-DDS7: Documentar 14 skills (LOCAL) - implementar

**Current Stack**: 39 skills (25 documented), Dashboard WS 3 FAILs, 272 TS files, 0 vulnerabilities.

---
*Imported from Engram on 2026-09-06*
