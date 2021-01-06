const path = require(`path`)
const fs = require(`fs`)
const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem');

exports.createPages = async ({
  graphql,
  actions
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
          }
        }
      }
    }
  `)
  result.data.allTseProjects.edges.forEach(({
    node
  }) => {
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

exports.sourceNodes = async ({
  actions,
  store,
  cache,
  createNodeId,
  createContentDigest,
}) => {
  const {
    createNode,
  } = actions;

  // These "documents" used to be stored in Firebase's Cloud Firestore
  // One document = one JSON file => the ID is the filename - the extension
  const documents = [];
  for (const type of ["Applications", "Members", "Projects"]) {
    const typepath = path.join(__dirname, "data", type.toLowerCase());
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

  // Resolve each document into a Gatsby node
  const document_promises = documents.map(([type, doc]) => new Promise(async (resolve, reject) => {
    try {
      const data = doc.data;
      let image_promise;
      if (data.image != null) {
        image_promise = createRemoteFileNode({
          url: data.image,
          store,
          cache,
          createNode,
          createNodeId,
        });
      } else {
        image_promise = new Promise((resolve, _) => {
          resolve(null);
        });
      }
      const image_node = await image_promise;
      const node_internal = {
        ...data
      };
      if (image_node != null) {
        node_internal.local_image___NODE = image_node.id;
      }
      const node = Object.assign(node_internal, {
        id: doc.id,
        parent: null,
        children: [],
        internal: {
          type: `Tse${type}`,
          content: JSON.stringify(node_internal),
          contentDigest: createContentDigest(node_internal),
        },
      });
      createNode(node);
      resolve();
    } catch (err) {
      reject(err);
    }
  }));
  await Promise.all(document_promises);
};
