---
created: 2026-08-31 17:57:19
tags: [engram, architecture]
engram_id: 3517
type: architecture
---

# Dashboard GV dark-first reskin

**What**: Re-skin del dashboard web a GV dark-first con persistencia global de tema, tokens dark oficiales, atmósfera grid/glows, tipografía Orbitron y primary Tailwind alineado.
**Why**: Unificar la identidad visual del dashboard con el resto del stack Gentle-Vanguard.
**Where**: apps/web-dashboard/src/main.tsx, src/App.tsx, src/components/Dashboard.tsx, src/styles/index.css, tailwind.config.js
**Learned**: `gv-cc-theme` usa valores `dark`/`light`; el bootstrap aplica la clase `dark` antes de montar React y Dashboard sincroniza toggle/localStorage. Se conservaron clases blue-* para compatibilidad de tests y se sobrescribieron en dark con tokens GV; `primary` también quedó en #00bfff/#4dcfff. Verificación: typecheck, lint, 95 tests y build pasan; Prettier y git diff --check pasan.

---
*Imported from Engram on 2026-09-06*
