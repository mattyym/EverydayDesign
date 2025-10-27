import type { NextConfig } from "next";

// Use env in prod; default to local Flask in dev
const API_BASE = process.env.API_BASE || "http://localhost:5000";

const nextConfig: NextConfig = {
  reactCompiler: true, // keep your existing setting

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_BASE}/:path*`,
      },
    ];
  },
};

export default nextConfig;