---
created: 2026-09-06 12:15:18
tags: [engram, bugfix]
engram_id: 3705
type: bugfix
---

# Video/Skills honestos con puente IA

**What**: Video y Skills honestos y usables: brief requerido, disclosure motor plantilla, previews con overlay, skills con puente IA
**Why**: Usuario reportó video oscuro sin explicación y skills que parecían instrucciones no funcionales; pidió gap real vs MPT+SMS
**Where**: apps/content-cms/src/video-panel.tsx (F3c), src/skills-panel.tsx (F2b)
**Learned**: MP4 plantilla = fondo #0F1115 por eso preview negro; overlay CSS lo hace revisable. Skills SÍ funcionales (deterministas) pero voice-builder devuelve plantilla voice.md — confunde sin disclosure. Mejorar con IA usa /api/generate con provider Settings.

---
*Imported from Engram on 2026-09-06*
