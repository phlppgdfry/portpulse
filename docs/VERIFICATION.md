# Closeout audit — 24 November 2026

Authored scenario assumptions are labelled inside the Insights screen. No AI confidence or measured 14-day history is claimed. Weekly totals sum the numeric saving-scenario inputs and apply the selected terminal factor; annual totals multiply by 52.

4 Chromium browser checks passed across 1440×1000 desktop and 390×844 mobile emulation. No uncaught page errors or horizontal page overflow were observed. The full five-project set contains 20 browser checks. Current npm audit: zero known vulnerabilities. Publication uses the immutable artifact ID from the upload output and the official Pages REST API with job-scoped OIDC. Eight deployment tests cover success, mismatched source artifacts, failed deploys, status outages, timeout/cancellation, delayed metadata, missing artifacts and permission denial. Metadata reads for the exact upload ID retry briefly while GitHub propagates the artifact; deployment creation is never blindly retried. Credentials and request payloads are not logged. Local Markdown links resolve. Browser plugin not available; validation used Playwright. Physical devices, Safari and production terminal/ERP integrations are outside this synthetic portfolio acceptance scope.

# Verification — 24 November 2026

Contractor recommendations now compare the visible contractors using observed sample wait times, truck volume and a derived hourly rate. Empty searches explain how to recover; all alert close buttons have accessible names. The comparison is a synthetic scenario, never a guaranteed weekly saving.

Current checks: production build, functional browser flows on desktop/mobile, CSV/download contents and no uncaught browser errors. PDF source reconciliation and gate-validator checks run in their respective CI pipelines. Updated screenshots are actual renders of the production artifacts.

## Earlier release evidence

# Verification record

Portfolio refresh · 8 November 2026

- `npm run build`: TypeScript and Vite production build passed; React/chart chunks split.
- `npm run lint`: passed without warnings.
- `npm audit`: zero known vulnerabilities after compatible updates.
- Chromium: terminal switch changes the scenario KPI; report downloads as CSV;
  Analyse and contractor search work; mobile page has no horizontal overflow.
- Chart animation disabled so reduced-motion users and screenshots receive the
  fully drawn data immediately. Positive/negative KPI arrows now match direction.

## Browser evidence

Desktop screenshots use a 1440 × 1040 viewport; mobile screenshots use 390 × 844.
These are actual Chromium captures of the built applications, not design mockups.
Screenshots show sample data. External map, chart-library or weather availability
can vary independently of the application.

- [Desktop capture](screenshots/desktop.png)
- [Mobile capture](screenshots/mobile.png)
- [Local commands and demo boundary](PORTFOLIO.md)

The public deployment is built from the committed source by
`.github/workflows/portfolio-pages.yml`. Review its Actions run for the exact
commit and deployment result; this note is not a claim of production integration
certification, a full accessibility audit or a penetration test.

## Final review — 15 November 2026

The published demo was rechecked in Chromium using Playwright at 1440 × 1040
and 390 × 844. Page identity, meaningful content, absence of framework overlays,
working user interactions and CSV contents all passed. No uncaught JavaScript
errors or page-level horizontal overflow were observed. Desktop and mobile
screenshots were refreshed from the published demo.

The exact routes, viewports and interaction checks are recorded in
[the machine-readable final review](verification/final-review.json).
The finalized source is preserved by the `portfolio-2026-11-15` release tag.
