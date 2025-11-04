// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Generate a static site in ./out (avoids Turbopack port binding) */
  output: "export",
  /** Disable Next/Image optimizer so static export works everywhere */
  images: { unoptimized: true },
  /** (Optional) add a trailing slash if you’ll host on static file servers */
  // trailingSlash: true,
};

export default nextConfig;
