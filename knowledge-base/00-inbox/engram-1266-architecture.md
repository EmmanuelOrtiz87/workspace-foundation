---
created: 2026-06-01 02:01:59
tags: [engram, architecture]
engram_id: 1266
type: architecture
---

# Reorganización estructural - naming + testing + dirs vacíos

**What**: Reorganización estructural completa del stack GV. 4 naming mismatches corregidos (marketing-growth-hacker typo, _semantic-skill-matcher underscore, business→business-skills, usage-metrics→usage-metrics-skill) con actualización de todas las cross-references. 31 dirs vacíos eliminados de scripts/utilities. 2 testing skills duplicadas (test-strategy + testing-strategy) consolidadas en testing-skill, con 24 cross-references actualizadas en scripts, config, docs y tests.
**Why**: Consistencia de nombres habilita ruteo automático correcto. Testing duplicado confundía al router y fragmentaba la base de conocimiento. Dirs vacíos añadían ruido.
**Where**: skills/ (170 skills), config/auto-delegation.json, scripts/utilities/ (53→22 subdirs), 15 archivos con refs actualizadas
**Learned**: Los .ps1 root en scripts/utilities/ son stubs que delegan a subdirs — pattern facade útil, no moverlos. La consolidación de skills requiere actualizar ~15 archivos de referencia cruzada en promedio.

---
*Imported from Engram on 2026-09-06*
