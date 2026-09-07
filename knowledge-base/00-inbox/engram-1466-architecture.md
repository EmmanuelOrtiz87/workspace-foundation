---
created: 2026-07-02 14:29:33
tags: [engram, architecture]
engram_id: 1466
type: architecture
---

# Document Analysis Skill desde Turnkey

**What**: Document Analysis Skill creada extrayendo el sidecar Python de Turnkey a Gentle-Vanguard como skill nativa. 8 modulos Python: office_reader (DOCX/XLSX/PPTX/PDF/TXT/CSV/MD/XML/JSON), pdf_reader (PyMuPDF + OCR), image_reader (Pillow + Tesseract), document_processor (chunking/clasificacion), embedding_engine (sentence-transformers), diagram_generator (Mermaid/PlantUML), document_generator (DOCX/XLSX/PPTX/PDF/MD), main.py (entry point NDJSON). Orquestador PowerShell invoke-document-analysis.ps1 con pipeline completo: leer documento -> LLM real (opencode) -> detectar tecnologias/patrones/especialistas/dependencias -> estimar tiempos + costos USD -> reporte markdown. Conectores Jira API v3 y Confluence REST API. Registrado en session-autostart.config.json como step lazy.

**Why**: Permitir analisis de documentos de requerimientos (PDF/DOCX/XLSX/PPTX) detectando tecnologias, patrones de diseno, especialistas/areas, dependencias y estimando tiempos/costos en USD, usando LLM real del stack en lugar del stub de Turnkey.

**Where**: skills/document-analysis-skill/ (8 modulos Python + orquestador PowerShell + 2 conectores + SKILL.md + requirements.txt)

**Learned**: WeasyPrint requiere try/except OSError en Windows (no solo ImportError). Forward slashes necesarios en paths JSON para Python sidecar. JSON paths con backslashes dan Invalid escape error.

---
*Imported from Engram on 2026-09-06*
