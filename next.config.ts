import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL("https://github.com/CodeStorm-Hub.png")],
  },
};
export default nextConfig;
