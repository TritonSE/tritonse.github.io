const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allTseProjects {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  result.data.allTseProjects.edges.forEach(({ node }) => {
    console.log(`Generated project page at /project/${node.id}.`);
    createPage({
      path: `project/${node.id}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        id: node.id 
      },
    })
  })
}
