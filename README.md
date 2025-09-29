# CodeStorm Hub Portfolio Website

CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

This is the official portfolio website built with Next.js, Tailwind CSS, and Radix UI, featuring a modern design system inspired by Vercel's design engineering practices.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Components**: [Radix UI](https://www.radix-ui.com)
- **Typography**: [Geist Font](https://vercel.com/font)
- **Language**: TypeScript
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                    # Utilities and configurations
└── styles/                 # Global styles and design tokens
```

## Design System

This project implements a comprehensive design system based on:
- [Radix Colors](https://www.radix-ui.com/colors) for consistent color palettes
- [Radix UI Primitives](https://www.radix-ui.com/primitives) for accessible components
- [Vercel Design](https://vercel.com/design) principles and patterns

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:github-pages` - Build for GitHub Pages deployment
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project supports two deployment methods:

### GitHub Pages (Recommended)
The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

- **Live Site**: [https://codestorm-hub.github.io/CodeStorm-Hub.github.io/](https://codestorm-hub.github.io/CodeStorm-Hub.github.io/)
- **Deployment**: Automatic via GitHub Actions
- **Configuration**: See [GitHub Pages Deployment Guide](docs/github-pages-deployment.md)

### Vercel
Alternative deployment platform with similar capabilities.

- **Configuration**: `vercel.json` included for Vercel deployments

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.
