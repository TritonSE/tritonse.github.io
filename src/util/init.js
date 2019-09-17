import React from 'react'

function init_materialize() {
  require('../../node_modules/materialize-css/dist/js/materialize.min.js');
  window.M.AutoInit();
  window.Waves.displayEffect();
}

function init_firebase() {
  
}

function init_all() {
  init_materialize();
  init_firebase();
}

export { init_materialize, init_firebase, init_all };
