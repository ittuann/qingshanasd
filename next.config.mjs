import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",

  distDir: "dist",
  reactStrictMode: true,
  trailingSlash: true,

  // https://github.com/vercel/next.js/issues/52050 https://github.com/vercel/next.js/issues/8158
  // assetPrefix: "https://ittuann.github.io",
  // basePath: "/qingshanasd",

  images: {
    unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
