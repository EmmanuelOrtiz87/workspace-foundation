---
created: 2026-08-31 19:38:37
tags: [engram, bugfix]
engram_id: 3539
type: bugfix
---

# CC: canónico servido por el server + topbar canónico + render incremental sin parpadeo

**What**: Fix del Command Center (commit c2eeeca3): (1) el server ahora sirve el design system canónico vía GET /gv-design-system.css (readFileSync de assets/ desde la raíz, no-store) y el index.html lo linkea — eliminados los estilos locales duplicados/conflictivos del shell (topbar-inner/brand/mark sin prefijo que pisaban al canónico); (2) topbar migrado al markup canónico .gv-topbar > .gv-topbar-inner > .gv-brand — verificado con screenshot: brand izquierda + estado + controles derecha, idéntico a CMS/analytics; (3) PARPADEO eliminado: render() incremental con lastSnapshot (early-return si el JSON no cambió) + cardNodes Map (update in-place de badges/procesos/botones por app, sin reemplazar artículos) — cero innerHTML en el polling.
**Why**: El usuario reportó topbar "muy raro" y pantalla parpadeando en el CC — el mismo problema de flicker que el dashboard ya había resuelto con React diffing; el CC vanilla lo necesitaba a mano.
**Where**: apps/command-center/server.ts, apps/command-center/public/index.html, assets/gv-design-system.css
**Learned**: (1) REGLA DE CONSISTENCIA: cuando una app vanilla usa clases del canónico, debe LINKIAR el CSS canónico real (servido por su server) — nunca redefinir .gv-* localmente (duplicación = divergencia visual). (2) Patrón anti-parpadeo para vanilla JS con polling: snapshot JSON compare (skip si igual) + node Map con update in-place por campo — el equivalente manual del diffing de React. (3) Los servers de apps pueden servir assets compartidos del repo agregando una ruta de lectura — el mecanismo para que apps estáticas/vanilla accedan al canónico sin copiarlo.

---
*Imported from Engram on 2026-09-06*
