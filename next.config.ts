import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "almacenamientojson.blob.core.windows.net",
        pathname: "/imgs/**",
      },
      {
        protocol: "https",
        hostname: "c0.klipartz.com",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
      },
      {
        protocol: "https",
        hostname: "railway.com",
      },
    ],
  },
};

export default nextConfig;
