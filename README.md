# softwaretestingSIS

Automated end-to-end test suite for Practice Software Testing — Toolshop (`https://practicesoftwaretesting.com/`) built with Playwright and TypeScript.

- [Project Description & Test Cases](./Description.md)
- [AI Prompts Used](./Prompt.md)
- [AI Results Review & Modifications](./Review.md)

## CI

**CI system:** GitHub Actions. It is built into GitHub, where the repository already lives, needs no server of its own, is free for public repositories, and supports matrices for sharding.

[[https://github.com/fernblau/softwaretestingSIS/actions/workflows/playwright.yml/badge.svg?branch=main]](https://github.com/fernblau/softwaretestingSIS/actions/workflows/playwright.yml)


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
| 1 job, no sharding | TBD | TBD | TBD |
| 4 shards + merge | TBD | TBD | TBD |

Median of 3 runs via `workflow_dispatch`. Conclusion: Update after running both 1-shard and 4-shard workflows on GitHub Actions.

### Running locally

```bash
npm ci
npx playwright install --with-deps chromium
CI=true npx playwright test
```
