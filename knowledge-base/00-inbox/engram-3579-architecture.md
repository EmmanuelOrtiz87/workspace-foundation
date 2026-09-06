---
created: 2026-09-01 16:49:27
tags: [engram, architecture]
engram_id: 3579
type: architecture
---

# Design Skills Upgrade 2026-09-01

**What**: Completé el upgrade más grande de skills de diseño en Gentle-Vanguard - incorporé 5 fuentes externas de diseño profesional.

**Why**: El usuario pidió "otro nivel de diseño" - más profesional, más real, más empresarial, más moderno. Las 5 fuentes identificadas cubren desde anti-pattern detection hasta referencias de marcas reales.

**Where**:
- `.opencode/skills/impeccable/` - 23 comandos de diseño, 61 reglas detectoras de anti-patterns
- `.opencode/skills/playwright-cli/` - CLI token-eficiente para browser automation
- `.opencode/skills/brand-design-systems/` - 74 sistemas de diseño de marcas reales (Tesla, Apple, Nike, Linear, Figma, etc.)
- `.opencode/skills/design-engineering/` - Colección curada de skills de engineering (typography, color, motion, accessibility)
- `config/subagent-mapping.json` - Actualizado con nuevos skills para SAD y QA
- `src/integrations/zcode-sync.ts` - CRITICAL_SKILLS actualizado

**Learned**:
- impeccable requiere Node >=22.18 y funciona perfectamente con npx
- getdesign.md tiene 74 marcas en VoltAgent/awesome-design-md repo
- ui-skills.com tiene skills curados organizados por categoría
- El skill de impeccable se llama SKILL.src.md (no SKILL.md) - renombrar para compatibilidad
- La convención es: frontmatter con name, description, triggers, metadata (source, license)

---
*Imported from Engram on 2026-09-06*
