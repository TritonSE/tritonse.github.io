const path = require(`path`)
const fs = require(`fs`)
const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem');

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  const {
    createPage
  } = actions
  const result = await graphql(`
    query {
      allTseProjects {
        edges {
          node {
            id
            tag
          }
        }
      }
    }
  `)
  result.data.allTseProjects.edges.forEach(({
    node
  }) => {
    const activity = reporter.activityTimer(`generate page /project/${node.tag}`);
    activity.start();
    createPage({
      path: `project/${node.tag}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        id: node.id
      },
    })
    activity.end();
  })
}

exports.sourceNodes = async ({
  actions,
  reporter,
  store,
  cache,
  createNodeId,
  createContentDigest,
  getNodesByType
}) => {
  const {
    createNode,
  } = actions;

  // These "documents" used to be stored in Firebase's Cloud Firestore
  // One document = one JSON file => the ID is the filename - the extension
  let activity = reporter.activityTimer(`read metadata`);
  activity.start();
  const documents = [];
  for (const type of ["Applications", "Members", "Projects", "Winners"]) {
    const typepath = path.join(__dirname, "src", "data", type.toLowerCase());
    for (const filename of fs.readdirSync(typepath)) {
      const filepath = path.join(typepath, filename);
      const stats = fs.statSync(filepath);
      if (stats.isDirectory()) {
        continue;
      }
      const id = path.parse(filename).name;
      const strdata = fs.readFileSync(filepath, 'utf8');
      const data = JSON.parse(strdata);
      documents.push([type, {
        id,
        data
      }])
    }
  }
  activity.end();

  // Resolve each document into a Gatsby node
  activity = reporter.activityTimer(`load images from metadata`);
  activity.start();
  for (const [type, doc] of documents) {
    const content = {
      ...doc.data
    };
    if (content.image != null) {
      const file_nodes = getNodesByType('File');
      const image_node = file_nodes.find(fn => fn.relativePath === content.image);
      if (image_node == null) {
        console.error(`Could not find image for member: ${JSON.stringify(content)}`)
        continue
      }
      content.image___NODE = image_node.id;
      delete content.image;
    }
    const node = Object.assign(content, {
      id: doc.id,
      parent: null,
      children: [],
      internal: {
        type: `Tse${type}`,
        content: JSON.stringify(content),
        contentDigest: createContentDigest(content),
      },
    });
    createNode(node);
  }
  activity.end();
};
