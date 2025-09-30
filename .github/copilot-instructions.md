# GitHub Copilot Instructions (canonical)

> Canonical location for Copilot / AI coding agent guidance for this repository. Keep this file short, actionable, and up-to-date. If other instruction files exist (for humans or tooling), they should point here.

## Quick Project Summary
- Next.js 15 (App Router) + TypeScript (strict)
- Tailwind CSS 4 for styling, Radix UI primitives for accessibility
- Atomic component structure under `src/components/` and pages under `src/app/`
- Focus: accessibility (WCAG 2.1 AA), Core Web Vitals performance, and DX

## Essential Commands
- Install: npm install
- Dev: npm run dev
- Lint: npm run lint
- Build: npm run build
- Type check: npx tsc --noEmit

## Agent Guidance (do these first)
1. Respect strict TypeScript and avoid `any`. Export prop types with components.
2. Use Tailwind utilities; avoid introducing new global CSS files.
3. Prefer Next.js primitives (Image, Link) and dynamic imports for heavy bundles.
4. Use Radix UI primitives for interactive patterns (Dialog, DropdownMenu, Toast).
5. Add Metadata via Next's `Metadata` API for pages (SEO/OpenGraph).

## Useful Repo-Specific Pointers
- Component examples: `src/components/ui/` and `src/components/` (follow existing prop patterns)
- Pages: `src/app/[route]/page.tsx` and `src/app/layout.tsx` for global layout and metadata
- Utilities and types: `src/lib/`
- Config files: `tailwind.config.ts`, `next.config.ts`, `vercel.json`, `postcss.config.mjs`
- CI and validation: `.github/workflows/copilot-validation.yml`
- MCP config (extended agent context): `.github/copilot-mcp.json`
- Dev environment spec: `.copilot/dev-environment.yml` (recommended tools and extensions)

## VS Code / Agent Environment Recommendations
- Recommended extensions: bradlc.vscode-tailwindcss, ms-vscode.vscode-typescript-next, esbenp.prettier-vscode, ms-vscode.vscode-eslint, github.copilot, github.copilot-chat
- Run `npx tsc --noEmit` and `npm run lint` before suggesting large changes.

## When to Update This File
- If you change build/dev commands, CI workflows, or introduce new global patterns.
- Keep content minimal and link to longer docs under `docs/` for deep guidance.

---
For longer design-system guidance see `docs/design-principles.md`. For environment details see `.copilot/dev-environment.yml`.