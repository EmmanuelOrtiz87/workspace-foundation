---
created: 2026-08-31 17:22:28
tags: [engram, architecture]
engram_id: 3508
type: architecture
---

# Fases 2-3 unificación: prompt-studio + academy + presentations on-brand

**What**: Fases 2 y 3 de la unificación GV completadas. Fase 2 (commit e25d00b9): prompt-studio con shell GV (grid/glows/topbar/view-tabs/footer) + src/i18n.ts es/en + theme toggle; academy estática con shell + snapshot gv-design-system.css + diccionario I18N con data-i18n + toggles — ambas con localStorage keys globales gv-cc-lang/gv-cc-theme. Fase 3 (commit c13782fe): docs/presentations rebrandeado — gv.css (1604 líneas, 24 páginas HTML lo consumen vía CSS vars) actualizado a tokens oficiales (#a78bfa→#a855f7, #22d3ee→#00bfff, #121212→#0d1117, #1f2937→#1a2035, #9ca3af→#6b7280, amber/red/green→tokens) + wordmark del navbar con Orbitron.
**Why**: El usuario pidió que TODAS las superficies GV (apps + documentación oficial) compartan diseño, formato, estructura, experiencia, efectos, transiciones, fuentes, iconos, logo — con español default + selector de idioma + toggle claro/oscuro en todas.
**Where**: apps/prompt-studio/*, apps/academy-web/*, docs/presentations/assets/css/gv.css
**Learned**: (1) docs/presentations usa Bootstrap + gv.css propio con variables — rebrandear los VALORES de las variables rebrandea las 24 páginas de una vez (palanca de alto impacto). (2) Apps estáticas no pueden importar fuera de su root: copiar el design system como snapshot documentado. (3) Claves localStorage globales (gv-cc-lang/gv-cc-theme) hacen que la preferencia de idioma/tema se respete en todas las apps. (4) PENDIENTE FASE 4: actualización de contenido de documentación (academy docs + presentations docs), migración progresiva de apps a importar gv-design-system.css (hoy cada app tiene su copia/patrón), extracción exhaustiva de textos secundarios de Content OS.

---
*Imported from Engram on 2026-09-06*
