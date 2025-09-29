import type { NextConfig } from "next";

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Only enable export for GitHub Pages production builds
  ...(isGitHubPages && { output: 'export' }),
  trailingSlash: true,
  images: {
    // Only disable optimization for GitHub Pages
    unoptimized: Boolean(isGitHubPages),
    remotePatterns: [new URL("https://github.com/CodeStorm-Hub.png")],
  },
  // GitHub Pages specific configuration
  ...(isGitHubPages && {
    basePath: '/CodeStorm-Hub.github.io',
    assetPrefix: '/CodeStorm-Hub.github.io/',
  }),
};

export default nextConfig;
