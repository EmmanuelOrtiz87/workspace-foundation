---
created: 2026-06-12 11:09:49
tags: [engram, bugfix]
engram_id: 1407
type: bugfix
---

# hashline.ps1 - PSObject.Properties->GetEnumerator, Read-Db init db.files

**What**: Reparados 3 errores runtime en hashline.ps1: (1) Read-Db ahora retorna @{files=@{}} siempre para evitar $db.files nulo; (2) Reemplazados todos los $db.files.PSObject.Properties con $db.files.GetEnumerator() porque PSObject.Properties en hashtable devuelve propiedades .NET (Count, Keys, Values, IsReadOnly) no los pares key/value; (3) .PSObject.Properties.Remove() reemplazado por .Remove() directo. Ademas: funciones Write-Db, Get-LineHash, Get-FileLines movidas ANTES del switch($Action) para evitar errores de scope. 3 catch-blocks corruptos reparados (patron Write-Debug "Exception caught: param(..."). 4 copias duplicadas eliminadas (1227 -> 306 lineas).

---
*Imported from Engram on 2026-09-06*
