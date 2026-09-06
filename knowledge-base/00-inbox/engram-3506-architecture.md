---
created: 2026-08-31 17:18:24
tags: [engram, architecture]
engram_id: 3506
type: architecture
---

# Fase 2 prompt-studio academy unification

**What**: Added GV shell, shared es/en locale controls, and shared theme persistence to prompt-studio and academy-web.
**Why**: Phase 2 of GV unification; both apps must share localStorage keys and canonical visual primitives.
**Where**: apps/prompt-studio/src/App.tsx, src/i18n.ts, src/styles.css; apps/academy-web/index.html, app.js, style.css, gv-design-system.css.
**Learned**: Prompt Studio resolves the canonical stylesheet from src/styles.css via ../../../assets/gv-design-system.css (../../ was one directory short). Academy uses a copied static snapshot because it cannot import outside its served root. Existing unrelated working-tree changes were preserved.

---
*Imported from Engram on 2026-09-06*
