# PortPulse portfolio walkthrough

## Try it in two minutes

1. Inspect the gate dashboard and its wait-time chart.
2. Switch terminal to compare the synthetic KPI scenarios.
3. Filter the truck log, then inspect Analyse and the congestion heatmap.
4. Search a contractor and inspect the illustrative recommendations.
5. Export a CSV report; it contains the selected terminal's KPI scenario and
   the shared example events, explicitly labelled separately.

## Scope and architecture

React/TypeScript components → terminal context → deterministic scenario data →
Recharts visualisations. The app builds to static files with Vite and deploys to
GitHub Pages; relative assets also support the existing Vercel host.

KPI factors are illustrative, not derived from the truck log. The truck log,
analysis series and contractor examples are shared between terminal scenarios.
The cost counter simulates elapsed cost; there is no telemetry feed. AI Insights
contains authored recommendations, not model inference. None of the companies
named in this exercise supplied or endorsed these metrics.

## Local development

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Open the URL printed by Vite. `dist/` is the deployable artifact.
