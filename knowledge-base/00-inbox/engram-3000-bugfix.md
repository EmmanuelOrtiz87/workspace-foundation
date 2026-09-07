---
created: 2026-08-24 06:06:19
tags: [engram, bugfix]
engram_id: 3000
type: bugfix
---

# Fixed codecov SHA-pin false positive in secret scanner

**What**: Corregido falso positivo del secret-scanner: el patrón "Codecov Token" matcheaba pines SHA de GitHub Actions (`codecov/codecov-action@<40-hex>`) porque el regex `([a-z0-9]{32})` sin fronteras capturaba subcadenas del SHA de 40 chars. Fix: aserciones de frontera `(?<![@\w])([a-z0-9]{32})(?![\w])` que rechazan ventanas precedidas por `@` o char de palabra (pines) pero aceptan tokens reales entre comillas/espacios.
**Why**: El commit del gate i18n al CI (.github/workflows/reusable-test.yml) activó el escaneo completo del archivo preexistente; el hook pre-commit de lefthook abortaba silenciosamente (output cortado en secret-scanner sin mensaje de error visible en git commit).
**Where**: src/secret-scanner.ts (patrón línea ~795), tests/unit/secret-scanner.test.ts (+2 regresiones), .github/workflows/reusable-test.yml
**Learned**: Cuando `git commit` no aterrice con hooks lefthook: correr `npx lefthook run pre-commit` directamente — muestra el hook que falla y su salida completa (git commit trunca silenciosamente). El mecanismo falsePositives[] del scanner es por substring del valor capturado (sirve para dominios conocidos, NO para SHAs arbitrarios) — para falsos positivos estructurales, corregir el regex con lookbehind/lookahead. Los pines SHA completos en workflows son hardening supply-chain legítimo, nunca secretos.

---
*Imported from Engram on 2026-09-06*
