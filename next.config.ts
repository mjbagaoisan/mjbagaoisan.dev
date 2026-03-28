import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      { hostname: "cdn.jsdelivr.net" },
      { hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
