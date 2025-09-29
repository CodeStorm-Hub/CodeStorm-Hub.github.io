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
