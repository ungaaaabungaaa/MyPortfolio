/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/index.html", destination: "/", permanent: true }];
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    // Public files have stable names. Cache repeat visits for one day, but do
    // not mark them immutable: a later release can replace an image or resume.
    return ["/images/:path*", "/icons/:path*", "/documents/:path*"].map(
      (source) => ({
        source,
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      }),
    );
  },
};

export default nextConfig;
