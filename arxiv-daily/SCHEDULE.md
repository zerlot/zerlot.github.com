# Arxiv Daily – Schedule Configuration

## Recurring Schedule

| Field | Value |
|---|---|
| **Platform** | Perplexity Computer (native `schedule_cron`) |
| **Cron ID** | `2a83864f` |
| **Cron expression (UTC)** | `0 2 * * *` |
| **Human-readable** | Every day at 02:00 UTC (10:00 AM HKT) |
| **Target date per run** | Yesterday UTC (`datetime.now(UTC) - 1 day`) |
| **Task name** | `Arxiv Daily Digest` |

## What each run does

1. **Fetch** – Queries the arXiv API for papers in `cs.AR`, `cs.AI`, `cs.DC` submitted on the target date.
2. **Analyze** – Classifies each paper by relevance to performance/systems themes (training, inference, operators, frameworks, distributed systems, hardware architecture, resource management, compiler/runtime).
3. **Render** – Generates a mobile-friendly HTML daily blog page and rebuilds the index.
4. **Deploy** – Commits and pushes all generated files to `zerlot/zerlot.github.com` → GitHub Pages.

## Pipeline Code

Location: `/home/user/workspace/arxiv-pipeline/`

| Module | Purpose |
|---|---|
| `config.py` | Categories, keywords, paths, rendering config |
| `fetcher.py` | arXiv API query builder and paper fetcher |
| `analyzer.py` | Keyword-based relevance scoring and metadata extraction |
| `renderer.py` | HTML blog page and index page generation |
| `deployer.py` | Git clone/pull/commit/push operations |
| `run.py` | Main entry point – orchestrates the full pipeline |

## Output locations

| Artifact | Path |
|---|---|
| Raw API data | `arxiv-daily/data/raw/YYYY-MM-DD_raw.json` |
| Processed analysis | `arxiv-daily/data/processed/YYYY-MM-DD_processed.json` |
| Daily blog page | `arxiv-daily/YYYY/MM/YYYY-MM-DD.html` |
| Index page | `arxiv-daily/index.html` |
| Run log | `arxiv-daily/logs/YYYY-MM-DD.log` |
| History index | `arxiv-daily/data/history_index.json` |

## URLs

| Page | URL |
|---|---|
| Index | https://zerlot.github.io/arxiv-daily/ |
| Daily page | https://zerlot.github.io/arxiv-daily/YYYY/MM/YYYY-MM-DD.html |

## Manual run

```bash
cd /home/user/workspace/arxiv-pipeline
python run.py                  # process yesterday (UTC)
python run.py 2026-03-24       # process a specific date
```

## Relevance themes

Papers are classified against these themes using keyword matching:
- `training_system` – Model training, pre-training, fine-tuning, data/model/pipeline parallelism
- `inference_system` – Inference serving, latency, throughput, KV cache, quantization
- `operator` – Kernels, attention ops, GEMM, fused operations
- `framework` – PyTorch, JAX, compilers, runtimes
- `distributed_system` – Distributed computing, scheduling, collective communication
- `hardware_architecture` – GPU/TPU/NPU/FPGA, memory hierarchy, interconnects
- `resource_management` – GPU sharing, scheduling policies, autoscaling
- `compiler_runtime` – Compiler IR, operator fusion, memory planning
