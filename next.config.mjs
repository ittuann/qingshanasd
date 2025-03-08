/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  output: "export",
  trailingSlash: true,

  // https://github.com/vercel/next.js/issues/52050 https://github.com/vercel/next.js/issues/8158
  // assetPrefix: "https://ittuann.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
