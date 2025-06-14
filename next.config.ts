import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https"
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https"
      },
      {
        hostname: "books.google.com",
        protocol: "http"
      }
    ]
  }
};

export default nextConfig;
