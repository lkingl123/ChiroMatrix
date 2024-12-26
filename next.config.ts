import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's Strict Mode
  async headers() {
    return []; // No headers, so no CSP
  },
};

export default nextConfig;

