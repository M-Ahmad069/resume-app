import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    'react-particles', 
    'tsparticles', 
    'tsparticles-slim', 
    'tsparticles-engine',
    'react-spring',
    'react-intersection-observer',
    'react-parallax-tilt'
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
