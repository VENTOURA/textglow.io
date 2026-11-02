# Textglow.io ✍️✨

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-6.x-ff5d01.svg)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Website](https://img.shields.io/badge/Live-textglow.io-22c55e.svg)](https://textglow.io)

**[Textglow](https://textglow.io)** is an open, high-performance web platform and collection of interactive tools designed to help professionals, job seekers, and ESL communicators polish emails, assess communication tone, and draft clear, high-impact messages without cumbersome prompts.

Deployed live in production at: **[https://textglow.io](https://textglow.io)**

---

## 🚀 Key Features

* **Interactive Writing Tools:**
  * **Email Tone Analyzer:** Identifies formal, casual, assertive, and diplomatic tone markers.
  * **Formality Checker & Email Rewriter:** Evaluates readability and suggests more professional alternatives.
  * **Passive-Aggressive Checker:** Highlights unintended phrasing with constructive rewording suggestions.
  * **Cold Outreach & Subject Line Scorer:** Generates and evaluates subject lines for higher open rates.
  * **Jargon & Gen-Z Translators:** Bridges corporate and informal language gaps quickly.
* **Static Route Architecture:** Over 95 pre-rendered pages built with Astro static-site generation (SSG) for instant page loads and maximum SEO performance.
* **Privacy-Friendly:** Text analysis and transformation utilities operate client-side in the browser—no text storage, no data harvesting.
* **Component-Driven UI:** Built with React 19, Tailwind CSS, Framer Motion animations, and Lucide icons.

---

## 🎯 Who It's For

* **Non-native English Speakers (ESL):** Ensuring professional emails, Slack messages, and cover letters sound natural and polite.
* **Remote & Distributed Teams:** Avoiding tone misunderstandings on Slack and asynchronous communication platforms.
* **Job Seekers & Freelancers:** Drafting concise outreach messages, networking requests, and interview follow-ups.
* **Customer Support & Sales:** Crafting polite, empathetic, yet assertive responses.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [Astro](https://astro.build/) (Static Site Generation / Hybrid mode)
* **Frontend Components:** [React 19](https://react.dev/)
* **Type System:** [TypeScript 5.9](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with `@tailwindcss/typography`
* **Animations & Icons:** [Framer Motion](https://www.framer.com/motion/) & [Lucide React](https://lucide.dev/)
* **Build Tooling:** [Vite](https://vitejs.dev/) with `@astrojs/check` and ESLint 9

---

## 📁 Project Structure

```text
├── astro/                  # Astro pages, layouts, and route shims
│   ├── components/         # Astro-specific layout components (Navbar, Footer, SEO)
│   ├── layouts/            # Base HTML & document layouts
│   └── pages/              # File-based routing ([...slug].astro dynamic routes)
├── src/                    # Shared React application code
│   ├── components/         # Reusable React UI widgets, tools, and sections
│   ├── data/               # Static datasets, blog posts, and example libraries
│   ├── pages/              # Interactive React tool views
│   └── utils/              # Scoring algorithms, heuristics, and text helpers
├── public/                 # Static assets (favicons, sitemaps, robots.txt, icons)
├── scripts/                # Build and deployment automation scripts
├── ROADMAP.md              # Planned engineering epics and milestones
└── LICENSE                 # MIT License
```

---

## 💻 Getting Started

### Prerequisites

* **Node.js:** `v20.x` or later
* **npm:** `v10.x` or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VENTOURA/textglow.io.git
   cd textglow.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Inspect environment setup:
   ```bash
   cp .env.example .env
   ```

### Development

Start the local development server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to view the application.

---

## 🏗️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server at `localhost:4321` |
| `npm run build` | Builds static HTML pages and minified client assets to `dist/` |
| `npm run preview` | Serves the production build locally for verification |
| `npm run check` | Runs TypeScript check (`tsc`) and Astro type diagnostics (`astro check`) |
| `npm run lint` | Runs ESLint across the codebase |

---

## 🗺️ Roadmap & Upcoming Work

Active engineering priorities, planned feature additions (e.g. side-by-side diff viewers, summary condenser tools), and testing expansions (~30+ hours of planned work) are tracked in **[ROADMAP.md](./ROADMAP.md)**.

---

## 📄 License

This project is open-source and released under the **[MIT License](./LICENSE)**.
