---
created: 2026-08-31 17:12:56
tags: [engram, architecture]
engram_id: 3503
type: architecture
---

# Fase 1 sistema diseño unificado

**What**: Creada la fuente canónica `assets/gv-design-system.css`; eliminada la ruta y lazy component Docs del dashboard; añadido i18n es/en y toggles de tema persistentes a Command Center y CMS.
**Why**: Implementar la Fase 1 de unificación visual solicitada sin migrar todavía las apps al CSS compartido.
**Where**: assets/gv-design-system.css; apps/web-dashboard/src/App.tsx y components/InteractiveDocs.tsx; apps/command-center/public/index.html y widget.js; apps/content-cms/src/App.tsx, contentos.tsx, i18n.ts, styles.css.
**Learned**: Analytics sigue siendo referencia intacta. El dashboard no contiene `/docs` ni `InteractiveDocs`; las claves docs de ui-strings ya no estaban presentes. Verificaciones CMS 40/40 y dashboard 95/95 pasan; CC smoke PASS. El repositorio tenía cambios preexistentes en assets/tokens y documentación que no se tocaron.

---
*Imported from Engram on 2026-09-06*
