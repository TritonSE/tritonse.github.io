/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ["tsx", "mdx"],
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      loader: "akamai",
      path: "/",
      disableStaticImages: true,
    },
  })
);
