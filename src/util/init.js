import React from 'react'

function init_materialize() {
  require('../../node_modules/materialize-css/dist/js/materialize.min.js');
  window.M.AutoInit();
  window.Waves.displayEffect();
}

function init_firebase() {
  let firebase = require('firebase');
  firebase.initializeApp({
    apiKey: "AIzaSyBtdsy5_rUnaKB_A4f_SFMulkKqC4loxFg",
    authDomain: "tritonse-web.firebaseapp.com",
    databaseURL: "https://tritonse-web.firebaseio.com",
    projectId: "tritonse-web",
    storageBucket: "tritonse-web.appspot.com",
    messagingSenderId: "370639204520",
    appId: "1:370639204520:web:18bff2bb0a54e74b17d29d"
  });
  window.firestore = firebase.firestore();
}

function init_all() {
  init_materialize();
  init_firebase();
}

export { init_materialize, init_firebase, init_all };
