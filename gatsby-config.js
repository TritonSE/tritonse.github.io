module.exports = {
  siteMetadata: {
    title: "tritonse.github.io",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          projectPages: require.resolve("./src/layouts/ProjectLayout.js"),
          default: require.resolve("./src/layouts/PlainLayout.js"),
        },
        rehypePlugins: [
          require("rehype-slug"),
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
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "inter",
        ]
      }
    }
  ],
};
