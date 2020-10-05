function init_materialize() {
  require('../../node_modules/materialize-css/dist/js/materialize.min.js');
  window.M.AutoInit();
  window.Waves.displayEffect();
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
}

function init_wowjs() {
  const wow = require('../../node_modules/wowjs/dist/wow.min.js');
  new wow.WOW().init();
}

export {
  init_materialize,
  init_wowjs
};
