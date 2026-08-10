import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    qualities: [75, 95],
  },

  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
