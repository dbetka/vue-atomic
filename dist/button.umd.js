(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('atoms/button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'atoms/button'], factory) :
  (global = global || self, factory(global.AButton = {}, global.AButton));
}(this, (function (exports, AButton) { 'use strict';

  AButton = AButton && Object.prototype.hasOwnProperty.call(AButton, 'default') ? AButton['default'] : AButton;

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('AButton', AButton);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.default = component;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
