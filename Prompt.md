# AI Prompts Used

## AI Tool & Model
- **Tool:** Gemini (Mac Desktop Agent / Task Mode)
- **Model:** Gemini (gemini-2.5-pro / Gemini Agent)

## Prompt 1 — Fixing Broken Test Suites & Completing Part 1
> Test Automation with Playwright
>
> LINK to Site to be tested: https://practicesoftwaretesting.com/
>
> At least 5 AT suites mentioned in the presentation — use any language you want with the Playwright framework.
> - `Description.md` — explain what I want to do and list the TCs to be automated
> - `Prompt.md` — save the exact prompt used for the AI tool and mark the exact tool used
> - `Review.md` — explain what the AI results were about, how I reviewed and modified them, and justify your decisions
>
> I will push it to the repository in GitHub. The whole work consists of two parts. First I need to work on the repository: tests need to run and everything should be without errors and bugs. Then there's this second part in the attached file (`SIS 2: CI pipeline for Playwright step-by-step guide.pdf`) where we need to do more work.

## Prompt 2 — Troubleshooting & Live Verification
> I connected my `softwaretestingSIS` folder. I already have the files BUT they don't run. I have errors. Almost each of the 5 tests fail. I need to fix it now and then move on the second part of the project.

## Prompt 3 — Part 2 CI/CD Pipeline Setup (from attached SIS 2 guide)
> Implement the SIS 2 CI pipeline in the `softwaretestingSIS` repository:
> 1. Add a CI branch in `playwright.config.ts` (`forbidOnly`, `retries: 2`, `workers: 2`, `list`/`blob`/`junit` reporters, `trace: 'on-first-retry'`, `BASE_URL` env support) and create `merge.config.ts`.
> 2. Create `.github/workflows/playwright.yml` with `push` and `pull_request` triggers, `setup-node` npm cache, `npm ci`, `npx playwright install --with-deps chromium`, a 4-shard matrix, a `merge-reports` job, and 14-day artifact retention.
> 3. Update `.gitignore` and add the `## CI` section to `README.md` with the `main` status badge, CI system justification, runtime comparison table, and local run instructions.
