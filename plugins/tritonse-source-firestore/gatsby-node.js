const firebase = require("firebase")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
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

  types.forEach(
    ({ type, path }) => {
      console.log(`\n[Firestore] Fetching data for ${type}...`)

      db.collection(path).get().then(snapshot => {
        console.log(`\n[Firestore] Data for ${type} loaded in ${Date.now() - start} ms.`)

        snapshot.forEach(doc => {
          const node = Object.assign({}, doc.data());

          createNode(
            Object.assign(node, {
              id: doc.id,
              parent: null,
              children: [],
              internal: {
                type: `Firestore${type}`,
                content: JSON.stringify(doc.data()),
                contentDigest: createContentDigest(node) 
              }
            })
          )
        });

        done()
      })
    });
}
