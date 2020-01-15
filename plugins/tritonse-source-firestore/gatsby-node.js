const firebase = require("firebase")
const async = require("async");
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

  let snapshot_tasks = [];

  // Download each snapshot in parallel
  types.forEach(({type, path}) => {
    snapshot_tasks.push(callback => {
      db.collection(path).get().then(snapshot => {
        callback(null, [type, snapshot]);
      }).catch((err) => {
        callback(err); 
      });
    });
  });

  async.parallel(snapshot_tasks, (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      let document_tasks = []; 

      // Break each snapshot into its documents
      results.forEach(([type, snapshot]) => {
        snapshot.forEach(doc => {
          // Initialize node creation task for each document; these will be done in parallel
          document_tasks.push(callback => {
            let data = doc.data();

            let image_promise = null;
            if (data.image != null) {
              // Download the remote image (returns a promise)
              image_promise = createRemoteFileNode({
                url: data.image,
                store,
                cache, createNode,
                createNodeId 
              });
            }
            else {
              // If there's no image present, we can just use an empty promise in place
              image_promise = new Promise((resolve, reject) => {
                resolve(null); 
              });
            }

            image_promise.then((image_node) => {
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
                  type: `Tse${type}`,
                  content: JSON.stringify(node_internal),
                  contentDigest: createContentDigest(node_internal) 
                }
              });
              createNode(node);

              callback(null, null); 
            }).catch((err) => {
              callback(err); 
            });
          });
        });
      });

      async.parallel(document_tasks, (err, results) => {
        if (err) {
          console.error(err);
        }
        else {
          done();
        }
      });
    }
  });
}
