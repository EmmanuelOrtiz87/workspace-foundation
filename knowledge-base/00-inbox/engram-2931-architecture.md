---
created: 2026-08-21 02:10:16
tags: [engram, architecture]
engram_id: 2931
type: architecture
---

# Doctor de instalación y sincronización runtime

**What**: Añadí manifest declarativo de instalación, doctor post-install y publiqué runtime config en la distribución pública.
**Why**: Mejorar la experiencia de instalación sin prometer un EXE autónomo inexistente y hacer verificable el estado de una máquina limpia.
**Where**: config/installer-manifest.json, src/installer-doctor.ts, package.json, docs/getting-started/PREREQUISITES.md, docs/getting-started/installation.md, src/sync-to-public.ts.
**Learned**: El doctor local y público reportan `ready` con dependencias, dashboard, lockfile, better-sqlite3 y configuración presentes; Docker queda WARN opcional. Smoke público pasa 9/9. La sincronización pública actual quedó en commit 4b26c66; privado main/develop en db0ea8ed. GitHub Actions siguen fallando inmediatamente con jobs sin steps/logs, por lo que no hay evidencia de CI verde y no se debe crear v3.8.2 todavía.

---
*Imported from Engram on 2026-09-06*
