const path = require(`path`)
const fs = require(`fs`)
const firebase = require(`firebase`)
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
  const types = [
    {
      type: "Applications",
      path: "applications",
    },
    {
      type: "Members",
      path: "members"
    },
    {
      type: "Projects",
      path: "projects"
    }
  ];

  // const documents = [];
  // for (const type of types) {
  //   const typepath = path.join(__dirname, "data", type.path);
  //   for (const filename of fs.readdirSync(typepath)) {
  //     const filepath = path.join(typepath, filename);
  //     const stats = fs.statSync(filepath);
  //     if (stats.isDirectory()) {
  //       continue;
  //     }
  //     const rawdoc = fs.readFileSync(filepath, 'utf8')
  //     const doc = JSON.parse(rawdoc)
  //     documents.push([type, doc])
  //   }
  // }

  // Initialize Firebase application
  firebase.initializeApp({
    apiKey: 'AIzaSyBtdsy5_rUnaKB_A4f_SFMulkKqC4loxFg',
    authDomain: 'tritonse-web.firebaseapp.com',
    databaseURL: 'https://tritonse-web.firebaseio.com',
    projectId: 'tritonse-web',
    storageBucket: 'tritonse-web.appspot.com',
    messagingSenderId: '370639204520',
  });
  const db = firebase.firestore();
  // Download snapshots from Firebase
  const snapshot_promises = types.map(({
    type,
    path,
  }) => new Promise(async (resolve, reject) => {
    try {
      resolve([type, await db.collection(path).get()]);
    } catch (err) {
      reject(err);
    }
  }));
  const snapshots = await Promise.all(snapshot_promises);
  // Break each snapshot into its documents
  // const documents = [];
  snapshots.forEach(([type, snapshot]) => {
    snapshot.forEach((doc) => {
      // documents.push([type, doc]);
      const typepath = path.join(__dirname, "data", type.toLowerCase());
      const filepath = path.join(typepath, doc.id + ".json");
      fs.writeFileSync(filepath, JSON.stringify(doc.data(), null, 2))
    });
  });
  // console.log(documents)
  // // Resolve each document into a Gatsby node
  // const document_promises = documents.map(([type, doc]) => new Promise(async (resolve, reject) => {
  //   try {
  //     const data = doc.data();
  //     let image_promise;
  //     if (data.image != null) {
  //       image_promise = createRemoteFileNode({
  //         url: data.image,
  //         store,
  //         cache,
  //         createNode,
  //         createNodeId,
  //       });
  //     } else {
  //       image_promise = new Promise((resolve, _) => {
  //         resolve(null);
  //       });
  //     }
  //     const image_node = await image_promise;
  //     const node_internal = {
  //       ...data
  //     };
  //     if (image_node != null) {
  //       node_internal.local_image___NODE = image_node.id;
  //     }
  //     const node = Object.assign(node_internal, {
  //       id: doc.id,
  //       parent: null,
  //       children: [],
  //       internal: {
  //         type: `Tse${type}`,
  //         content: JSON.stringify(node_internal),
  //         contentDigest: createContentDigest(node_internal),
  //       },
  //     });
  //     createNode(node);
  //     resolve();
  //   } catch (err) {
  //     reject(err);
  //   }
  // }));
  // await Promise.all(document_promises);
};
