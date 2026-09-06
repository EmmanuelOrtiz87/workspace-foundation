---
created: 2026-08-13 10:13:22
tags: [engram, decision]
engram_id: 2808
type: decision
---

# Repo absorción: Anthropic-Cybersecurity-Skills, cariddi, diagram-design, watermarks-remover

**What**: Validados 4 repos para absorción al stack Gentle-Vanguard (sesión 2026-08-13)
**Why**: Usuario pidió validar qué repos servirían para robustecer el stack
**Where**: .opencode/skills/, src/ (módulos TS nativos), gov-agent, watchtower
**Learned**:
- mukul975/Anthropic-Cybersecurity-Skills (Apache-2.0, 27.7K★): 817 skills de ciberseguridad para agentes AI, 29 dominios, mapeadas a 6 frameworks (MITRE ATT&CK v19.1, NIST CSF 2.0, ATLAS, D3FEND, AI RMF, F3). Patrón clave: progressive disclosure (frontmatter ~30 tokens scan, 500-2000 load). ALTA prioridad: absorber skills relevantes (AI Security, DevSecOps, Compliance, API Security) y el patrón de frontmatter para gov-agent.
- edoardottt/cariddi (GPL-3.0, 3.7K★): crawler de recon en Go. GPL-3.0 = NO copiar código. Pero minar patrones regex de secrets/endpoints para un secret-scanner TS nativo + posible integración binaria opcional en watchtower.
- cathrynlavery/diagram-design (MIT, 12.4K★): 27 tipos de diagramas editoriales HTML/SVG self-contained, sin build step. Absorber como skill para docs/ADRs (mejora sobre Mermaid-slop).
- guillaumemeyer/watermarks-remover (MIT, 3.6K★): remueve marcas de proveniencia AI (C2PA/SynthID/Unicode). FLAG ÉTICO: NO absorber la remoción; invertir: usar solo la lógica de INSPECCIÓN (inspect_file.py, C2PA) para verificación de proveniencia en gov-agent.
- Enlace LinkedIn resuelto: los 4 eran repos GitHub (lnkd.in bloquea curl, resolver via r.jina.ai con UA curl/8.0.1).

---
*Imported from Engram on 2026-09-06*
