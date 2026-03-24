# Arxiv Daily – Schedule Configuration

## Recurring Schedule

| Field | Value |
|---|---|
| **Platform** | Perplexity Computer (native `schedule_cron`) |
| **Cron expression (UTC)** | `0 2 * * *` |
| **Human-readable** | Every day at 02:00 UTC (10:00 AM HKT) |
| **Target date per run** | Yesterday UTC (`datetime.now(UTC) - 1 day`) |
| **Task name** | `Arxiv Daily Digest` |

## What each run does

1. **Fetch** – Queries the arXiv API for papers in `cs.AR`, `cs.AI`, `cs.DC` submitted on the target date.
2. **Analyze** – Classifies each paper by relevance to performance/systems themes (training, inference, operators, frameworks, distributed systems, hardware architecture).
3. **Render** – Generates a mobile-friendly HTML daily blog page and rebuilds the index.
4. **Deploy** – Commits and pushes all generated files to `zerlot/zerlot.github.com` → GitHub Pages.

## Output locations

| Artifact | Path |
|---|---|
| Raw API data | `arxiv-daily/data/raw/YYYY-MM-DD_raw.json` |
| Processed analysis | `arxiv-daily/data/processed/YYYY-MM-DD_processed.json` |
| Daily blog page | `arxiv-daily/YYYY/MM/YYYY-MM-DD.html` |
| Index page | `arxiv-daily/index.html` |
| Run log | `arxiv-daily/logs/YYYY-MM-DD.log` |
| History index | `arxiv-daily/data/history_index.json` |

## Public URLs

- **Index:** https://zerlot.github.io/arxiv-daily/
- **Daily page:** https://zerlot.github.io/arxiv-daily/YYYY/MM/YYYY-MM-DD.html

## Pipeline code location

The pipeline source lives in the Perplexity Computer workspace at:
```
/home/user/workspace/arxiv-pipeline/
├── config.py    # Categories, keywords, paths
├── fetch.py     # arXiv API client with retry/rate-limit handling
├── analyze.py   # Relevance classification + metadata extraction
├── render.py    # HTML generation (dark theme, mobile-first)
├── deploy.py    # Git commit + push
└── main.py      # Orchestrator
```

## Platform limitations & notes

| Limitation | Handling |
|---|---|
| **arXiv rate limit** | Exponential backoff on HTTP 429; 3.5s delay between pagination requests. Max 5 retries per page. |
| **arXiv submission lag** | Papers submitted late on day D may not appear in the API until D+1. Running at 02:00 UTC (querying D-1) gives arXiv ~24h to index. |
| **Weekend/holiday gaps** | arXiv has reduced submissions on weekends/holidays. The pipeline handles zero-paper days gracefully (generates a stub page). |
| **Cron jitter** | Perplexity Computer background cron may have slight scheduling jitter (minutes). This is acceptable for a daily digest. |
| **GitHub Pages build time** | After `git push`, Pages typically deploys within 1–2 minutes. The pipeline verifies deployment via HTTP HEAD. |
| **Idempotency** | Re-running for the same date overwrites all artifacts cleanly. No duplicates. |
| **Error logging** | All errors are written to `arxiv-daily/logs/YYYY-MM-DD.log` and committed to the repo. |

## Manual override

To re-run for a specific date manually, use Perplexity Computer and run:
```
cd /home/user/workspace/arxiv-pipeline && python3 main.py YYYY-MM-DD
```

Add `--no-push` to test without deploying.
