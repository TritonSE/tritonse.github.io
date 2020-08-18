let path = require('path');

module.exports = {
  siteMetadata: {
    title: "Triton Software Engineering",
    description: "Organization at UCSD that partners with nonprofits to develop applications for social good",
    author: "David Hacker"
  },
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tse-favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    // {
    //   resolve: `tritonse-source-firestore`,
    //   options: {
    //     types: [{
    //         type: "Applications",
    //         path: "applications",
    //       },
    //       {
    //         type: "Members",
    //         path: "members"
    //       },
    //       {
    //         type: "Projects",
    //         path: "projects"
    //       }
    //     ]
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
