# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Package manager:** pnpm (required, v10.18.1+)

```bash
pnpm dev          # Start development server (Vite HMR)
pnpm build        # Type-check + build for production (outputs to dist/)
pnpm preview      # Preview the production build locally
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix ESLint issues
pnpm format       # Format with Prettier
pnpm type-check   # Run tsc --noEmit (no output files)
```

No test suite exists in this project.

## Architecture

**Stack:** React 19 + TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui components, `@fullpage/react-fullpage` for scroll behavior.

**Entry flow:** `index.html` → `src/main.tsx` → `src/App.tsx` → `src/components/Resume.tsx`

**Data-driven pattern:** All portfolio content lives in `src/data/resumeData.ts` as a single typed object. Types are defined in `src/types/resume.ts`. Components receive data as props — to update portfolio content, edit `resumeData.ts` only.

**Full-page scrolling:** `Resume.tsx` wraps all sections in `@fullpage/react-fullpage`. Navigation uses anchors: `hero`, `skills`, `experience`, `projects`. Sections are rendered as discrete full-viewport slides.

**Styling conventions:** Tailwind utility classes throughout. CSS variables define the color system (hsl-based, supports light/dark via `tailwind.config.js`). The `@` alias resolves to `src/`.

**Deployment:** Pushing to `develop` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which runs type-check → lint → build, then deploys `dist/` to GitHub Pages (`gh-pages` branch). The live site is `https://ayushgupta11.github.io`.
