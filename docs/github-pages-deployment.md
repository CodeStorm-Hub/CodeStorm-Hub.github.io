# GitHub Pages Deployment Guide

This document outlines the deployment process for CodeStorm Hub using GitHub Pages with the official Next.js deployment workflow.

## Overview

CodeStorm Hub is deployed using GitHub Pages with Next.js static export functionality. The deployment process is fully automated through GitHub Actions using the official Next.js workflow template.

## Architecture

- **Framework**: Next.js 15 with static export (`output: 'export'`)
- **Deployment Platform**: GitHub Pages
- **Automation**: GitHub Actions workflow (official Next.js template)
- **Branch**: `main` (production deployment)
- **Build Output**: Static HTML/CSS/JS files in `/out` directory

## Deployment Configuration

### 1. Next.js Configuration (`next.config.ts`)

The application is configured for static export with GitHub Pages compatibility:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  
  // Disable trailing slash for better GitHub Pages compatibility
  trailingSlash: false,
  
  // Configure images for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/CodeStorm-Hub/**",
      },
    ],
  },
};

export default nextConfig;
```

### 2. GitHub Actions Workflow (`.github/workflows/nextjs.yml`)

Uses the official Next.js workflow template with:
- Automatic package manager detection (npm/yarn)
- Smart caching for faster builds
- Built-in Next.js configuration inference
- Proper permissions and concurrency handling
- Deployment to GitHub Pages using official actions

### 3. Repository Settings Required

Ensure the following GitHub repository settings are configured:

#### Pages Settings
1. Navigate to **Settings** → **Pages**
2. **Source**: GitHub Actions
3. The workflow will automatically create deployments

#### Actions Permissions
1. Navigate to **Settings** → **Actions** → **General**
2. Ensure "Allow all actions and reusable workflows" is selected
3. Under "Workflow permissions", select "Read and write permissions"

## Deployment Process

### Automatic Deployment

1. **Trigger**: Push changes to the `main` branch
2. **Build**: GitHub Actions runs the Next.js build process
3. **Export**: Next.js generates static files in `/out` directory
4. **Deploy**: Files are deployed to GitHub Pages automatically
5. **Live**: Site is available at the GitHub Pages URL

### Manual Deployment

You can manually trigger deployment:
1. Go to the repository's Actions tab
2. Select "Deploy Next.js site to Pages" workflow
3. Click "Run workflow" on the main branch

## Local Development

To test the build locally:

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (same as CI)
npm run build

# Serve the static files (optional)
npx serve out
```

## Continuous Integration

A separate CI workflow (`.github/workflows/ci.yml`) runs on all pushes and pull requests to:
- Lint the codebase
- Run type checking
- Test builds across multiple Node.js versions (18, 20, 22)

## Key Features

### Automatic Configuration
- Package manager detection (npm/yarn)
- Next.js configuration inference
- Smart caching for faster builds

### Security & Performance
- Proper GITHUB_TOKEN permissions
- Concurrency control to prevent conflicts
- Optimized build caching
- Static file generation for fast loading

### Monitoring
- Clear build logs in Actions tab
- Deployment status tracking
- Error reporting and debugging

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the Actions tab for detailed error logs
   - Ensure all dependencies are properly listed in `package.json`
   - Verify TypeScript compilation passes locally with `npx tsc --noEmit`

2. **Deployment Fails**
   - Verify repository Pages settings are configured for "GitHub Actions" source
   - Check that workflow permissions are set correctly
   - Ensure the workflow has proper `pages: write` and `id-token: write` permissions

3. **404 Errors**
   - Verify all pages are properly exported as static files
   - Check that Next.js routing is compatible with static export
   - The 404.html page is automatically generated for fallback routing

### Validation Steps

After deployment, verify:
- [ ] Site loads at the GitHub Pages URL
- [ ] All pages are accessible and properly rendered
- [ ] Images and assets load correctly
- [ ] Navigation works properly
- [ ] No console errors in browser developer tools
- [ ] Responsive design works across devices

## Maintenance

Regular maintenance tasks:
- Monitor GitHub Actions workflow runs
- Keep dependencies updated
- Review build performance and optimize as needed
- Test deployment after major Next.js or dependency updates

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the repository root with your domain
2. Configure DNS records with your domain provider
3. Update the domain in repository Pages settings
4. GitHub Pages will automatically handle HTTPS certificates

---

For questions or issues with deployment, please refer to the [GitHub Pages documentation](https://docs.github.com/en/pages) or [Next.js deployment documentation](https://nextjs.org/docs/deployment/static-exports).