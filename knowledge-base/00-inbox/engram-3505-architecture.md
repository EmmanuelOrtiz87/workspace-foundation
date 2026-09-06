---
created: 2026-08-31 17:14:34
tags: [engram, architecture]
engram_id: 3505
type: architecture
---

# Fase 1 unificación GV: design system + docs fuera del dashboard + i18n/tema CC/CMS

**What**: Fase 1 de la unificación GV completada (commit d4b893db): (1) creado assets/gv-design-system.css — el sistema de diseño canónico con tokens dark/light, shell (.gv-grid-bg/glows/topbar/view-tabs/system-state/panel), controles (.gv-btn variants/badges), transiciones, breakpoints 640/1024px y documentación de uso; (2) dashboard: pantalla /docs eliminada (ruta, nav, InteractiveDocs.tsx, claves i18n huérfanas) — academy la reemplaza; (3) CC: i18n es/en inline (es default, localStorage gv-cc-lang) + theme toggle dark/light (gv-cc-theme) + widget bilingüe; (4) CMS: src/i18n.ts con useT + diccionario es/en + selector + toggle tema persistido.
**Why**: El usuario pidió unificar TODAS las apps al mismo diseño/formato/estructura/experiencia GV, con español por defecto + selector de idioma + toggle claro/oscuro en todas, y remover la pantalla docs del dashboard (academy la reemplaza).
**Where**: assets/gv-design-system.css, apps/web-dashboard/src/App.tsx, apps/command-center/public/*, apps/content-cms/src/*
**Learned**: (1) El design system canónico vive en assets/gv-design-system.css con prefijo .gv- para no colisionar — fase 2 migrará las apps a importarlo. (2) Patrón i18n para apps nuevas: diccionario es/en inline o hook useT (dashboard tiene el patrón completo es/en/pt con 111 refs). (3) Persistencia estándar: localStorage gv-cc-lang / gv-cc-theme. (4) FASE 2 PENDIENTE: prompt-studio (shell+i18n+theme), academy (i18n+theme), migración de apps a gv-design-system.css, branding de docs/presentations, actualización de documentación de academy y presentations.

---
*Imported from Engram on 2026-09-06*
