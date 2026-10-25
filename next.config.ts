import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      allowedDevOrigins: [
        "https://7904-2409-40d7-c-f946-f516-cbb4-5d04-f0b2.ngrok-free.app",
      ],
    },
  },
};

export default nextConfig;
