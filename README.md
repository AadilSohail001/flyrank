# FlyRank

Capstone project for the **Frontend AI Engineering** track. FlyRank is a single-page React application built with AI-assisted development workflows, with an emphasis on maintainable code, conventional Git practices, and professional engineering habits.

## Overview

This repository documents the end-to-end process of building a frontend application with modern tooling and AI pair programming. The app is a clean, responsive landing page composed of reusable React components — a foundation that can grow into a full product over time.

**Current status:** One-page landing live — header, hero, features, about, and footer sections implemented.

## What's on the Page

| Section | Description |
| --- | --- |
| **Header** | FlyRank logo and navigation links |
| **Hero** | Headline, project summary, and call-to-action buttons |
| **Features** | Three cards highlighting the stack, AI workflow, and architecture |
| **About** | Capstone project context and goals |
| **Footer** | Copyright and attribution |

The layout is fully responsive and supports light/dark mode via CSS custom properties.

## Tech Stack

| Layer | Tools |
| --- | --- |
| UI | React 19, JavaScript (JSX), HTML, CSS |
| Build | Vite 8 |
| Quality | ESLint, Conventional Commits |
| Tooling | Node.js, Git, GitHub |

## AI-Assisted Development

AI tools are used throughout the workflow for debugging, refactoring, documentation, and code explanation:

- **Cursor IDE** — primary editor and inline AI assistance
- **Claude Code** — project-level guidance and automation
- **ChatGPT** — ad hoc research and problem-solving

All AI-generated code is reviewed manually before it is committed. Project conventions live in [`CLAUDE.md`](./CLAUDE.md).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)
- Git

### Installation

```bash
git clone <repository-url>
cd flyrank
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The dev server supports hot module replacement (HMR).

### Other Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
flyrank/
├── public/                  # Static assets (favicon, icons)
├── src/
│   ├── components/          # Reusable UI sections
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── LandingPage.jsx  # Composes all sections into one page
│   ├── assets/              # SVG and image assets
│   ├── App.jsx              # Root component — renders LandingPage
│   ├── App.css              # Landing page styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and CSS variables
├── CLAUDE.md                # AI and coding conventions for this repo
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML shell
├── package.json             # Dependencies and npm scripts
├── vite.config.js           # Vite configuration
└── README.md
```

## Goals

- Practice AI-assisted frontend development in a real project
- Follow [Conventional Commits](https://www.conventionalcommits.org/) for clear Git history
- Write maintainable, component-based React code
- Improve day-to-day engineering workflow and code review habits

## Git Conventions

Commit messages follow the Conventional Commits format:

```
feat: add landing page hero section
fix: correct mobile nav layout on small screens
docs: update README project structure
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `test`

## License

See [`LICENSE`](./LICENSE) for details.
