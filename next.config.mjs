/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash as an allowed domain
  },
};

export default nextConfig;
