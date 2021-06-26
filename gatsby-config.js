module.exports = {
  siteMetadata: {
    title: "tritonse.github.io",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          projectPages: require.resolve("./src/layouts/ProjectLayout.js"),
          default: require.resolve("./src/layouts/PlainLayout.js"),
        },
        rehypePlugins: [
          require("rehype-slug"),
          [require("rehype-autolink-headings"), { behavior: "wrap" }],
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projectPages",
        path: "./src/pages/projects/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
  ],
};
