const firebase = require("firebase")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.sourceNodes = (
  { actions, store, cache, createNodeId, createContentDigest },
  { types },
  done
) => {
  const { createNode } = actions 

  firebase.initializeApp({
    apiKey: "AIzaSyBtdsy5_rUnaKB_A4f_SFMulkKqC4loxFg",
    authDomain: "tritonse-web.firebaseapp.com",
    databaseURL: "https://tritonse-web.firebaseio.com",
    projectId: "tritonse-web",
    storageBucket: "tritonse-web.appspot.com",
    messagingSenderId: "370639204520"
  })

  const db = firebase.firestore()

  db.settings({
    timestampsInSnapshots: true
  });

  const start = Date.now()

  // Count the number of types/queries that we need to make to Firebase 
  let counter_types = 0;
  let num_types = types.length;

  types.forEach(
    ({ type, path }) => {
      db.collection(path).get().then(snapshot => {
        // Count the number of documents in the snapshot
        let counter_docs = 0;
        let num_docs = 0;
        snapshot.forEach(doc => {
          num_docs++;
        });

        snapshot.forEach(doc => {
          let data = doc.data();

          let image_promise = null;
          if (data.image != null) {
            // Download the remote image (returns a promise)
            image_promise = createRemoteFileNode({
              url: data.image,
              store,
              cache,
              createNode,
              createNodeId 
            });
          }
          else {
            // If there's no image present, we can just use an empty promise in place
            image_promise = new Promise(function (resolve, reject) {
              resolve(null); 
            });
          }

          image_promise.then(function(image_node) {
            // Copy the original document data into its own object
            let node_internal = Object.assign({}, data);

            // Link the cached image node to its parent Firestore node
            if (image_node != null) {
              node_internal.local_image___NODE = image_node.id;
            }

            // Create the document node object, potentially linking to the image node
            let node = Object.assign(node_internal, {
              id: doc.id,
              parent: null,
              children: [],
              internal: {
                type: `Firestore${type}`,
                content: JSON.stringify(node_internal),
                contentDigest: createContentDigest(node_internal) 
              }
            });
            createNode(node);

            // When we've gone through all documents & all types, we should execute the done() callback
            counter_docs++;
            if (counter_docs === num_docs) {
              counter_types++;
              if (counter_types === num_types) {
                done()
              }    
            }
          });
        });
      }).catch(err => {
        console.err('[Firestore] Failed to get document:', err);
      });
    });
}
