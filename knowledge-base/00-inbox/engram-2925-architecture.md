---
created: 2026-08-20 20:35:41
tags: [engram, architecture]
engram_id: 2925
type: architecture
---

# Documentación pública y retiro de Dify

**What**: Simplifiqué README.md y README-PUBLIC.md para público general, añadí documentación técnica ampliada y política de publicación, retiré la configuración Dify no operativa y convertí gentle-vanguard en privado.
**Why**: Separar onboarding de detalles técnicos, evitar confusión sobre capacidades disponibles y mantener una distribución pública curada.
**Where**: README.md, README-PUBLIC.md, docs/technical/STACK-DOCUMENTATION.md, docs/REPOSITORY-PUBLICATION.md, config/cloud-agents.json, config/model-router.json, config/model-fallback.json, src/auto-ps1-fixer-configs.ts; eliminados config/cline-dify*.json y docs/guides/dify-integration.md.
**Learned**: OpenCode valida el archivo pero no obtiene proveedores desde cloud-agents o model-fallback; Dify no era seleccionable porque no existía un adaptador/proveedor OpenCode real. La estrategia de sync usa README-PUBLIC.md como fuente para el README del repositorio público. `gentle-vanguard` quedó privado y `gentle-vanguard-public` sigue público. README governance, JSON validation, typecheck, lint y 5 suites de tests pasan. Prettier reporta warnings de estilo en README/config-fallback, sin fallas funcionales.

---
*Imported from Engram on 2026-09-06*
