const process = require("process");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  images: {
    loader: "custom",
    // https://nextjs.org/docs/api-reference/next/image#device-sizes
    // Keep this in sync with images/config.ts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
});
