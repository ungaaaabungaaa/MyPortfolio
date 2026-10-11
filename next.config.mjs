/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/index.html", destination: "/", permanent: true }];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
