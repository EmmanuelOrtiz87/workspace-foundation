---
created: 2026-07-08 05:29:17
tags: [engram, architecture]
engram_id: 1499
type: architecture
---

# Consolidated search_huggingface_datasets.py into search_datasets.py

**What**: Ported all unique functionality from `search_huggingface_datasets.py` (322 lines, REST+CSV) into the consolidated `search_datasets.py` (666 lines), then deleted the old file.

**Why**: The old script's functionality (multi-term batch search, RLHF/alignment relevance filtering, dataset categorization, CSV export) was not covered by the new consolidated script.

**Where**: `research/rlhf-dataset-search/search_datasets.py` — added 150+ lines of new code

**Learned**: Features ported: (1) `HF_SEARCH_TERMS` constant with 23 predefined search terms, (2) `search_hf_datasets_rest()` — REST fallback search (no `huggingface_hub` dependency), (3) `search_hf_datasets_batch()` — multi-term batch search with dedup + rate limiting, (4) `filter_relevant_hf_datasets()` — RLHF/alignment relevance filter, (5) `categorize_hf_dataset()` — assigns DPO/RLHF/SFT/Preference Data/etc. categories, (6) `extract_hf_use_cases()` — extracts use cases from metadata, (7) `print_hf_categorized_results()` — groups output by category, (8) `save_hf_csv()` — CSV export with structured columns. CLI additions: `--action batch`, `--categorize`, `--csv`. Also cleaned up stale `.gitignore` entry for the deleted file.

---
*Imported from Engram on 2026-09-06*
