---
created: 2026-08-31 18:58:43
tags: [engram, architecture]
engram_id: 3530
type: architecture
---

# Patrón controles GV replicado en 5 apps + timingSafeEqual desbloquea gate

**What**: Dos entregas finales (commits 23b7b887 + 1613d09f): (1) patrón de controles del dashboard replicado en las 5 apps — layout responsive flex-col sm:flex-row sm:items-center justify-between gap-2 (brand+título izquierda, icon-buttons derecha), dropdown de idioma con banderas+nombres+check, toggle tema Sun/Moon, refresh con spin; clases canónicas nuevas: .gv-icon-btn, .gv-lang-dropdown, .gv-lang-dropdown-menu, .gv-theme-toggle. (2) Diagnóstico del fondo de prompt-studio: la atmósfera canónica YA coincidía con academy (glows purple/cyan idénticos) — se eliminó un radial divergente del CC; comparación de tokens en curso. (3) Fix de seguridad real: comparación de token en tiempo constante (crypto.timingSafeEqual) en src/core/continuation.ts — desbloqueó el prepush-gate (warning timing-attack de sesión paralela).
**Why**: El usuario amó la disposición de controles del dashboard (flex-col sm:flex-row con botones tema/idioma) y la pidió replicada en todas las apps + CC; también reportó fondo de prompt distinto.
**Where**: assets/gv-design-system.css, apps/web-dashboard/src, apps/content-cms/src, apps/prompt-studio/src, apps/academy-web, apps/command-center/public, src/core/continuation.ts
**Learned**: (1) El patrón de controles GV: icon-buttons p-2 rounded-lg + dropdown idioma (overlay cierre + banderas + check) + toggle tema — canónico en .gv-icon-btn/.gv-lang-dropdown/.gv-theme-toggle. (2) timingSafeEqual para comparaciones de tokens de seguridad (try/catch por length mismatch) — corrige el warning Y es semánticamente correcto. (3) Los commits pueden incluir archivos nuevos de sesiones paralelas al desbloquear gates — documentar en el mensaje.

---
*Imported from Engram on 2026-09-06*
