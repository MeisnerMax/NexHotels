import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/check",
        destination: "/profit-control-check",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
