import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  experimental: {
    turbopackUseSystemTlsCerts: true,
  },

  turbopack: {
    root: ".",
  },
} as NextConfig;

export default nextConfig;
