/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/index.html", destination: "/", permanent: true }];
  },
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash as an allowed domain
  },
};

export default nextConfig;
