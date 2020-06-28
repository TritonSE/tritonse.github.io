const firebase = require('firebase');
const async = require('async');
const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem');

exports.sourceNodes = async ({
  actions,
  store,
  cache,
  createNodeId,
  createContentDigest,
}, {
  types,
}) => {
  const {
    createNode,
  } = actions;
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
  const documents = [];
  snapshots.forEach(([type, snapshot]) => {
    snapshot.forEach((doc) => {
      documents.push([type, doc]);
    });
  });
  // Resolve each document into a Gatsby node
  const document_promises = documents.map(([type, doc]) => new Promise(async (resolve, reject) => {
    try {
      const data = doc.data();
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
        node_internal.image_node___NODE = image_node.id;
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
