import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    'react-particles',
    'tsparticles',
    'tsparticles-slim',
    'tsparticles-engine',
    'react-intersection-observer',
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default nextConfig;
