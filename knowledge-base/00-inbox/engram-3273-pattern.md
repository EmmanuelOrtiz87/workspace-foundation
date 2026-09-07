---
created: 2026-08-29 17:08:02
tags: [engram, pattern]
engram_id: 3273
type: pattern
---

# Documentación profesional de apps soportadas

**What**: Homologué los README de Academy, Content CMS, GV Analytics y Web Dashboard con propósito, usuarios/clientes, capacidades, arquitectura, comandos, operación independiente, import/export, seguridad, límites, soporte y criterios de comercialización; añadí el README faltante de Analytics.
**Why**: Documentar profesionalmente las cuatro apps soportadas sin inventar capacidades y hacer explícita la arquitectura actual local-first.
**Where**: apps/academy-web/README.md, apps/content-cms/README.md, apps/gv-analytics/README.md, apps/web-dashboard/README.md, docs/presentations/architecture.html.
**Learned**: Academy es un curso estático sin progreso/LMS; CMS persiste en localStorage y no publica remotamente; Analytics usa la tabla local gv_analytics_reports en Nexus SQLite y exporta MD/HTML/DOCX/PDF; Dashboard aplica auth/RBAC/tenant según despliegue. Se actualizaron referencias formales de “future CMS” a CMS y no se mencionó F2.5 en Academy.

---
*Imported from Engram on 2026-09-06*
