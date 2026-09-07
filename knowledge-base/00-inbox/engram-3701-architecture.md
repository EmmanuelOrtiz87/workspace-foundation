---
created: 2026-09-06 10:11:35
tags: [engram, architecture]
engram_id: 3701
type: architecture
---

# CMS next-level F1-F5 vivo y verificado

**What**: CMS next-level F1-F5 implementado y verificado vivo: Settings IA, 6 skills, video local, 11 conectores, scheduler daemon
**Why**: Usuario pidió encargar todo local-first con todas las herramientas, absorbiendo MoneyPrinterTurbo + social-media-skills
**Where**: apps/content-cms/server/settings.ts, skills.ts, video-pipeline.ts, connectors.ts, scheduler.ts, scheduler-cli.ts, server.ts, src/settings-ia.tsx, skills-panel.tsx, video-panel.tsx, contentos.tsx
**Learned**: Servidor :3787 viejo daba ruta desconocida — reinicio requerido tras cambios. ffmpeg no instalado en Windows: pipeline degrada a guion+SRT+manifest (correcto). Scheduler checked 6 slots, 0 due. Hygiene reconoce cms-api/cms-vite healthy. Typecheck+lint+50 tests+vite build verdes.

---
*Imported from Engram on 2026-09-06*
