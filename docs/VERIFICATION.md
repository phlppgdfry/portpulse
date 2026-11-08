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
