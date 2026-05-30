import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/v1",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
