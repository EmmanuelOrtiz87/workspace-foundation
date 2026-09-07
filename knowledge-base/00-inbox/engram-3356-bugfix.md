---
created: 2026-08-29 22:07:47
tags: [engram, bugfix]
engram_id: 3356
type: bugfix
---

# Removed image-size transitive runtime

**What**: Removed root devDependency `pptxgenjs`, regenerated `pnpm-lock.yaml`, cleared obsolete image-size audit allowlists, and documented the isolated optional PPTX exporter.
**Why**: `pnpm why` showed `pptxgenjs@4.0.1 -> image-size@1.2.1`; npm registry has no patched image-size@2.0.3 and no newer pptxgenjs. Replacement packages are not API-compatible with pptxgenjs internals.
**Where**: `package.json`, `pnpm-lock.yaml`, `src/security/container-scan.ts`, `src/infrastructure/npm-audit-pre-push.ts`, `skills/huashu-design/scripts/export_deck_pptx.mjs`, `docs/security/IMAGE-SIZE-TRANSITIVE-MITIGATION.md`
**Learned**: `image-size` is no longer installed by the root runtime; PPTX export remains an explicitly separate skill environment. Root `pnpm audit` and `pnpm audit --prod` report zero vulnerabilities; native container-scan tests pass 14/14, typecheck and lint pass.

---
*Imported from Engram on 2026-09-06*
