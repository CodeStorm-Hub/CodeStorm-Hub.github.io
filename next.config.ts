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
    // Type checking is handled by the CI pipeline
    ignoreBuildErrors: false,
  },
  // Note: `eslint` config was removed from next.config per Next.js 16 migration
  // Move ESLint settings to a dedicated ESLint config file (e.g. .eslintrc.json)
};

export default nextConfig;
