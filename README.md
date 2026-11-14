# softwaretestingSIS

Automated end-to-end test suite for Practice Software Testing — Toolshop (`https://practicesoftwaretesting.com/`) built with Playwright and TypeScript.

- [Project Description & Test Cases](./Description.md)
- [AI Prompts Used](./Prompt.md)
- [AI Results Review & Modifications](./Review.md)

## CI

**CI system:** GitHub Actions. It is built into GitHub, where the repository already lives, needs no server of its own, is free for public repositories, and supports matrices for sharding.

[![Playwright Tests](https://github.com/fernblau/softwaretestingSIS/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/fernblau/softwaretestingSIS/actions/workflows/playwright.yml)


**Pipeline** (`.github/workflows/playwright.yml`):
- runs on every push and pull request (`workflow_dispatch` enabled for manual timing runs);
- `npm ci` with the npm cache, Chromium installed with system dependencies;
- the full Playwright suite split into 4 shards (`--shard=i/4`) running in parallel;
- the `merge-reports` job merges the shards' blob reports into one HTML report and JUnit XML;
- artefacts: `playwright-report` (HTML), `test-results-N` (traces, screenshots, videos, JUnit), `junit-report`; kept for 14 days.

**CI settings** (`playwright.config.ts`, when `CI=true`):
`forbidOnly: true`, `retries: 2`, `workers: 2`, reporters `list`, `blob`, `junit`, `trace: 'on-first-retry'`.

### Runtime

| Configuration | Total run time | Run tests step (slowest shard) | Run |
| --- | --- | --- | --- |
| 1 job, no sharding | 0 min 58 s | 0 min 34 s (job) | [Run #14](https://github.com/fernblau/softwaretestingSIS/actions/runs/43620538137) |
| 4 shards + merge | 0 min 54 s | 0 min 36 s (slowest shard) | [Run #18](https://github.com/fernblau/softwaretestingSIS/actions/runs/43621805781) |


Conclusion: Because the suite contains 7 fast tests, per-shard environment setup (`npm ci` and Playwright browser setup) dominates the runtime, so 4-way sharding keeps wall-clock duration roughly flat (`54s` vs. `53s`) while using `2m 14s` of total runner time.

### Running locally

```bash
npm ci
npx playwright install --with-deps chromium
CI=true npx playwright test
```
