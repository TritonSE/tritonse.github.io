function initMaterialize() {
  require("../../node_modules/materialize-css/dist/js/materialize.min.js");
  window.M.AutoInit();
  window.Waves.displayEffect();
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll("select");
    /* global M */
    M.FormSelect.init(elems, {});
  });
}

function initWowJS() {
  const wow = require("../../node_modules/wowjs/dist/wow.min.js");
  new wow.WOW().init();
}

export { initMaterialize, initWowJS };
