---
created: 2026-08-12 03:22:55
tags: [engram, bugfix]
engram_id: 2762
type: bugfix
---

# gitleaks-action v3: upload_artifact es env var, no input

**What**: El action gitleaks/gitleaks-action@v3 NO tiene un input `upload_artifact`. Para deshabilitar la subida del artifact results.sarif (que falla con "Artifact storage quota has been hit" en repos con cuota llena) se debe usar la variable de entorno `GITLEAKS_ENABLE_UPLOAD_ARTIFACT: "false"` en el bloque `env:` del step, NO `with: upload_artifact: false`.

**Why**: El job Gitleaks en reusable-security.yml fallaba por cuota de artifacts de GitHub. Verifiqué el código fuente en src/index.js y src/gitleaks.js: el action lee `process.env.GITLEAKS_ENABLE_UPLOAD_ARTIFACT == "false"` para setear gitleaksEnableUploadArtifact = false. No hay core.getInput("upload_artifact") en ninguna parte — el input sería ignorado silenciosamente.

**Where**: .github/workflows/reusable-security.yml

**Learned**: Verificar siempre el código fuente del action (gh api repos/<owner>/<repo>/contents/src/index.js) antes de asumir los inputs. Los inputs de GitHub Actions se leen con core.getInput; las env vars con process.env. El action v3 de gitleaks solo documenta inputs en action.yml (que es un wrapper mínimo) y la config real es por env vars: GITLEAKS_ENABLE_UPLOAD_ARTIFACT, GITLEAKS_ENABLE_SUMMARY, GITLEAKS_ENABLE_COMMENTS, GITLEAKS_VERSION, BASE_REF.

---
*Imported from Engram on 2026-09-06*
