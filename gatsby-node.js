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
          }
        }
      }
    }
  `)
  result.data.allTseProjects.edges.forEach(({
    node
  }) => {
    const activity = reporter.activityTimer(`generate page /project/${node.id}`);
    activity.start();
    createPage({
      path: `project/${node.id}`,
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
}) => {
  const {
    createNode,
  } = actions;

  // These "documents" used to be stored in Firebase's Cloud Firestore
  // One document = one JSON file => the ID is the filename - the extension
  let activity = reporter.activityTimer(`read project, member, applications metadata`);
  activity.start();
  const documents = [];
  for (const type of ["Applications", "Members", "Projects"]) {
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
  activity = reporter.activityTimer(`load project, member, applications images`);
  activity.start();
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
        node_internal.image___NODE = image_node.id;
        delete node_internal.image;
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
  activity.end();
};
