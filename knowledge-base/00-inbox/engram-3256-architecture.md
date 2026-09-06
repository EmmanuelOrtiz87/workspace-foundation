---
created: 2026-08-29 16:02:25
tags: [engram, architecture]
engram_id: 3256
type: architecture
---

# CMS separado para presentaciones

**What**: Diseñada arquitectura propuesta, sin modificar archivos, para separar el CMS de `docs/presentations` y crear una app React+TypeScript/Vite en `apps/content-cms`, manteniendo `apps/academy-web` como Academy, `apps/gv-analytics` como native app y `apps/web-dashboard` como dashboard.
**Why**: El usuario pidió un CMS local-first/offline con contenido tipado, validación runtime, preview, draft/published, assets, navegación, versionado, seguridad XSS, adaptador sustituible, design system compartido, accesibilidad, tests y fases.
**Where**: Propuesta conceptual alineada con ADR-0017 local-first, ADR-0018 content operations, `config/design-tokens.json`, `apps/gv-analytics` (React/Vite/Zod/SQLite) y `apps/web-dashboard` (React/Vite/tests/offline cache).
**Learned**: `docs/presentations` sigue siendo material editorial estático y contiene scripts CMS heredados; no debe convertirse en runtime del CMS. El CMS debe persistir en workspace-local `.runtime/content-cms/` o equivalente, exportar bundles publicados hacia presentaciones sin acoplar la UI. Usar estado Draft/Published separado, historial inmutable y tenant boundary desde el contrato.

---
*Imported from Engram on 2026-09-06*
