const process = require("process");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const withOptimizedImages = require("next-optimized-images");

// Allow image optimization to be disabled with an environment variable,
// enabling faster builds for CI checks.
const optimizeImages = process.env.IMAGE_OPTIMIZATION !== "none";
console.log(`Image optimization enabled: ${optimizeImages}`);

module.exports = withOptimizedImages(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ["tsx", "mdx"],
    eslint: {
      ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    // Only use custom loader (statically optimized images) for production builds.
    // Use built-in loader in development.
    images: {
      ...(process.env.NODE_ENV === "production" ? { loader: "custom" } : {}),
      disableStaticImages: true,
    },
    optimizeImages,
  })
);
