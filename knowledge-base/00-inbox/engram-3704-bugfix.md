---
created: 2026-09-06 10:19:34
tags: [engram, bugfix]
engram_id: 3704
type: bugfix
---

# Video galería visible con descarga y export

**What**: Video visible en app: galería + preview <video> + descarga MP4/SRT/guion/manifest + copiar ruta + export kit JSON
**Why**: Usuario reportó crear video sin ver resultados; exigió miniaturas, revisión, descarga a directorio y export a otras apps + mejor UX general
**Where**: apps/content-cms/server/video-pipeline.ts (listVideos, videoFilePath), server.ts (GET /api/video, GET /api/video/:id/file), src/video-panel.tsx (galería+preview+descargas), modules.test.ts (+1 test galería, 51 total)
**Learned**: Endpoint file solo maneja GET (HEAD da 404, normal para <video>/descargas). videoFilePath valida id con regex anti path-traversal. MP4 39KB 200 video/mp4, SRT 200. Vite dev sirve UI sin rebuild.

---
*Imported from Engram on 2026-09-06*
