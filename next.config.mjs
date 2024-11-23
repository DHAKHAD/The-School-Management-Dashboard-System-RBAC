/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
    domains: ["res.cloudinary.com"],
  },
  // next.config.js
};

export default nextConfig;
