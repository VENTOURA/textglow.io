# Textglow.io — Project Roadmap & Planned Work

This roadmap outlines active priorities and upcoming engineering work for [textglow.io](https://textglow.io). It covers planned feature additions, performance optimizations, architectural refactoring, and test infrastructure (~30+ hours of planned engineering).

---

## 🎯 Milestones & Estimates Overview

| Epic / Workstream | Focus Area | Estimated Effort | Status |
| :--- | :--- | :---: | :---: |
| **Epic 1: New Interactive Writing Tools** | Features & Utilities | 10 – 12 hours | 📋 Planned |
| **Epic 2: Architecture Modernization & Bundle Optimization** | Refactoring & Performance | 8 – 10 hours | 📋 Planned |
| **Epic 3: Automated Testing & CI Quality Pipeline** | Testing & Reliability | 6 – 8 hours | 📋 Planned |
| **Epic 4: Accessibility, Theming & Documentation** | UX, A11y & Docs | 4 – 6 hours | 📋 Planned |
| **Total Planned Work** | | **28 – 36 hours** | |

---

## Epic 1: New Interactive Writing Tools (10 – 12 hours)

Expand the current suite of writing tools to address common professional communication scenarios:

- [ ] **Executive Summary / TL;DR Condenser (3 hrs)**
  - Add an interactive tool that accepts long email threads or meeting transcripts and outputs a structured 3-bullet actionable executive summary.
  - Implement heuristic sentence ranking and keyword extraction on the client side.
- [ ] **Side-by-Side Visual Diff Viewer (3 hrs)**
  - Integrate the existing `diff` library to provide a clean inline/split diff mode showing character and word replacements between original and revised drafts.
  - Add color-coded highlights for insertions, deletions, and tone adjustments.
- [ ] **Multi-Tone Variation Switcher (2.5 hrs)**
  - Allow users to compare 3 tones simultaneously (e.g., *Assertive*, *Diplomatic*, *Casual*) on the same input without retyping.
  - Create a side-by-side responsive comparison grid.
- [ ] **Quick Export & Formatted Copy (1.5 hrs)**
  - Add one-click export to Markdown (`.md`), Plain Text (`.txt`), and rich HTML clipboard copying with visual toast notifications.

---

## Epic 2: Architecture Modernization & Performance (8 – 10 hours)

Enhance load speed, SEO performance, and maintainability across the 95+ pre-rendered routes:

- [ ] **Migrate Legacy React Shells to Native Astro (4 hrs)**
  - Convert remaining React route wrappers (`astro/components/ReactRoute.tsx`) into pure static Astro `.astro` components where client hydration is unnecessary.
  - Reduce total client JavaScript payload by ~35%.
- [ ] **Vite Bundle Splitting & Dynamic Imports (3 hrs)**
  - Resolve the Vite `> 500 kB` bundle warning by dynamically importing heavy libraries (`html2canvas`, `framer-motion`, `canvas-confetti`) only when triggered by user interaction.
  - Configure Rollup `manualChunks` in `astro.config.mjs` for vendor separation.
- [ ] **Persistent Dark / Light Mode System (2 hrs)**
  - Implement a zero-flicker client-side theme switcher utilizing Tailwind `dark:` classes and `localStorage`.
  - Add system preference auto-detection (`prefers-color-scheme`).

---

## Epic 3: Automated Testing & CI Quality Pipeline (6 – 8 hours)

Ensure high reliability and catch regressions across all interactive tools and static pages:

- [ ] **Unit Tests for Heuristics & Scoring Engine (3 hrs)**
  - Introduce `vitest` to test core analytical functions:
    - Formality scoring logic
    - Passive-aggressive phrase matchers
    - Email tone sentiment heuristics
    - Word, character, and reading-time counters
- [ ] **End-to-End Route Smoke Tests (Playwright) (3 hrs)**
  - Add Playwright E2E tests to verify:
    - All 95+ static HTML routes render with valid `<title>`, `<meta>`, and canonical URLs.
    - Interactive tools accept input, execute processing, and display copyable outputs.
- [ ] **GitHub Actions Automated Test Workflow (1 hr)**
  - Add a dedicated CI workflow step running `npm run check`, `npm run lint`, and unit tests prior to deployment.

---

## Epic 4: Accessibility, UX & Documentation (4 – 6 hours)

Refine user experience, meet modern web accessibility standards, and document tool internals:

- [ ] **WCAG 2.1 AA Accessibility Audit & Fixes (2.5 hrs)**
  - Audit keyboard navigation across all textareas, interactive sliders, and modal dialogs.
  - Add proper ARIA labels, focus-visible states, and screen-reader announcements for copy-to-clipboard actions.
- [ ] **Tool Engine & Heuristics Documentation (2 hrs)**
  - Document the rules, categories, and word dictionaries used by the tone and formality engines under a new `docs/engines/` directory.
- [ ] **Dynamic Social OG Preview Cards (1.5 hrs)**
  - Set up automated OpenGraph preview card generation for individual tools and blog articles.

---

## 🛠️ Contributing & Tracking

Issues matching the roadmap items above are tracked in the GitHub issue tracker. If you would like to tackle an item, check out [README.md](./README.md) for local development instructions.

