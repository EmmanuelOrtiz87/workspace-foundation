---
created: 2026-08-31 13:33:53
tags: [engram, bugfix]
engram_id: 3479
type: bugfix
---

# CC UI bootstrap faltante: load() nunca se invocaba (fix definitivo)

**What**: Fix del bug real de la UI del Command Center: el script vanilla definía load()/render()/toggle() pero NUNCA los invocaba — faltaba el bootstrap (load() inicial + setInterval de 5s) que en el componente React original hacía useEffect. La grilla quedaba en "Cargando aplicaciones…" eternamente, sin error.
**Why**: El usuario reportó dos veces que las apps no cargaban. Primera hipótesis (caché) era secundaria; el diagnóstico con Chrome headless --dump-dom reprodujo el bug localmente y reveló que el DOM nunca se renderizaba. Al portar de React a vanilla JS se perdió el equivalente del useEffect.
**Where**: src/ops/command-center/public/index.html (bootstrap al final del script: void load(); setInterval(() => void load(), 5000);)
**Learned**: (1) Al portar de React a vanilla JS, el useEffect de carga de datos DEBE convertirse en bootstrap explícito + setInterval — revisar que las funciones se INVOCAN, no solo que existen. (2) Técnica de diagnóstico decisiva: chrome --headless=new --dump-dom contra la página real reproduce el browser exacto; new Function() solo valida sintaxis, no que el código se ejecute. (3) new Function pasó OK porque el script era sintácticamente válido — el bug era de ORQUESTACIÓN (nadie llamaba a nada), no de sintaxis. (4) Commit 66b2d502.

---
*Imported from Engram on 2026-09-06*
