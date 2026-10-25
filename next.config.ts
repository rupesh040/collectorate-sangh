import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  agentRules: false,
  devIndicators: false,
  output: "export",
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : "dist",
  trailingSlash: true,
  images: { unoptimized: true },
});

export default nextConfig;
