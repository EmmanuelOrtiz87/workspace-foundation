---
created: 2026-08-26 18:17:31
tags: [engram, decision]
engram_id: 3176
type: decision
---

# Cierre Academy: diagramas legibles, nav 2 filas, brand accent en dashboard

**What**: CIERRE de Gentle-Vanguard Academy (e9dfcaa3): 6 diagramas SVG rediseñados con sistema row-lane (canvas 960px, lanes etiquetadas, flechas solo entre adyacentes, notas bajo canvas — QA visual sin superposiciones; script scripts/redesign-diagrams.py); nav del dashboard reorganizado en 2 filas etiquetadas (Operate: 5 links / Build & govern: 9 links); brand accent layer del 14-BRAND-SYSTEM sobre el tema dual (gradiente brand-mark/live-dot, cyan is-active). Estado final Academy: 9 tracks, 83 lecciones, 115 términos, i18n ES/EN/PT, 6 demos reales, generador, modal archivos.
**Why**: Feedback final del usuario (diagramas ilegibles, nav en filas, unificar branding, revisar CMS) y cierre formal de la Academy.
**Where**: apps/academy-web/{app.js,scripts/redesign-diagrams.py}, apps/web-dashboard/src/{App.tsx,styles/index.css}
**Learned**: JSX del dashboard: gv-brand-row envolvía todo el nav → al reestructurar el topbar-inner quedaba sin cerrar (TS17008 JSX no closing tag). Re-skin completo del tema dual diferido como decisión (no a ciegas). ContentOpsPanel sólido, hereda acentos. Git locks de la sesión paralela: esperar ~10s y reintentar.

---
*Imported from Engram on 2026-09-06*
