import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Automatically detect repository name from GitHub Actions GITHUB_REPOSITORY (e.g. "syed-reza98/CodeStorm-Hub") or default to "/CodeStorm-Hub" in production
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "/CodeStorm-Hub";
const isUserPage = process.env.GITHUB_REPOSITORY?.endsWith(".github.io");
const defaultBasePath = isUserPage ? "" : repoName;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? defaultBasePath : "");

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set basePath and assetPrefix for GitHub Pages subpath deployment
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // Pass basePath to client runtime environment
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  // Trailing slash ensures clean index.html directory routing on GitHub Pages
  trailingSlash: true,
  
  // Configure images for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
    ],
  },

  // Performance optimizations
  poweredByHeader: false,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
