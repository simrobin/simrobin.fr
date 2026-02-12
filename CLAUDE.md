# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/CV website for Simon Robin (simrobin.fr). Content is in French.

## Commands

- **Dev server:** `pnpm start`
- **Build:** `pnpm build`
- **Lint & format:** `pnpm lint` (runs biome check --fix on src/)
- **Format only:** `pnpm format` (runs biome format --write on src/)
- **Tests (watch):** `pnpm test`
- **Tests (CI/single run):** `pnpm test:ci`
- **Run single test:** `pnpm test:ci -- --testPathPattern="<pattern>"`

## Tech Stack

- **Next.js 16** with Pages Router (not App Router), React 19, TypeScript
- **pnpm** package manager (pnpm@10, Node 22)
- **Sass** for styling (SCSS files in `src/styles/`)
- **Jest** + **Testing Library** for tests

## Architecture

Single-page site using the Pages Router pattern:

- `src/pages/index.tsx` — Main page composing all sections (header, about, experiences, education, interests, footer)
- `src/pages/_app.tsx` — App wrapper, imports global SCSS
- `src/components/` — Presentational components: `Header`, `Experience`, `Education`, `Icon` (inline SVG icon system)
- `src/utils/constants.ts` — Shared constants (colors)
- `src/styles/` — Global SCSS: `vars.scss`, `reset.scss`, `base.scss`, `helpers.scss`, entry `index.scss`
- `src/__tests__/snapshot.js` — Snapshot test for the index page

The `Icon` component renders inline SVGs from a hardcoded path map with a typed `name` prop union.

## Pre-commit Hook

`script/hooks/pre-commit` auto-runs Biome (lint + format) on staged JS/TS/TSX files before commit.

## Style Conventions

- **Biome** handles linting and formatting (replaces ESLint, Prettier, and Stylelint)
- Single quotes, trailing commas, 100 char line width, 2-space indent
- Config in `biome.json`
