import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", 'images.pexels.com'],
  },
};

export default nextConfig;
