/*!
 * @dbetka/vue-atomic v0.0.6
 * (c) dbetka
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var IconEye = _interopDefault(require('vue-material-design-icons/Eye'));
var IconEyeOff = _interopDefault(require('vue-material-design-icons/EyeOff'));
var IconAlert = _interopDefault(require('vue-material-design-icons/Alert'));
var IconCheckBold = _interopDefault(require('vue-material-design-icons/CheckBold'));
var IconCancel = _interopDefault(require('vue-material-design-icons/ArrowDown'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var logical = {
  isUndefined: function isUndefined(value) {
    return typeof value === 'undefined';
  },
  isString: function isString(value) {
    return typeof value === 'string';
  },
  isNumber: function isNumber(value) {
    return typeof value === 'number';
  },
  isNull: function isNull(value) {
    return value === null;
  },
  isObject: function isObject(value) {
    return _typeof(value) === 'object' && logical.isNotNull(value);
  },
  isArray: function isArray(value) {
    return Array.isArray(value);
  },
  isFunction: function isFunction(value) {
    return typeof value === 'function';
  },
  isBoolean: function isBoolean(value) {
    return typeof value === 'boolean';
  },
  isDefined: function isDefined(value) {
    return logical.isUndefined(value) === false;
  },
  isNotString: function isNotString(value) {
    return logical.isString(value) === false;
  },
  isNotNumber: function isNotNumber(value) {
    return logical.isNumber(value) === false;
  },
  isNotNull: function isNotNull(value) {
    return logical.isNull(value) === false;
  },
  isNotObject: function isNotObject(value) {
    return logical.isObject(value) === false;
  },
  isNotArray: function isNotArray(value) {
    return logical.isArray(value) === false;
  },
  isNotFunction: function isNotFunction(value) {
    return logical.isFunction(value) === false;
  },
  isNotBoolean: function isNotBoolean(value) {
    return logical.isBoolean(value) === false;
  }
};

var vueModel = {
  get: function get() {
    return this.value;
  },
  set: function set(value) {
    this.$emit('input', value);
  }
};

var listeners = function listeners() {
  var excludedListeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    listeners: function listeners() {
      var l = Object.assign({}, this.$listeners);

      var _iterator = _createForOfIteratorHelper(excludedListeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listenerName = _step.value;
          delete l[listenerName];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return l;
    }
  };
};

//
var script = {
  name: 'a-assist',
  inject: ['MField'],
  computed: Object.assign(Object.assign({}, listeners()), {}, {
    classes: function classes() {
      return {
        'f-error': this.MField.error
      };
    }
  })
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._g({
    staticClass: "a-assist",
    "class": _vm.classes
  }, _vm.listeners), [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var formMixin = {
  data: function data() {
    return {
      _errors: [],
      message: '',
      isSending: false,
      blockForm: false
    };
  },
  methods: {
    onErrorOccurs: function onErrorOccurs(errorMessage) {
      console.error(errorMessage);
      this.message = errorMessage.message;
      this.isSending = false;
      this.blockForm = false;
    }
  }
};

var validationMixin = {
  data: function data() {
    return {
      rules: {
        email: 'required|email',
        password: 'required|min:8|max:64|hasNumber|hasCapitalize',
        passwordConfirmation: 'required|confirmed:password',
        userTeam: 'required|min:4',
        eventId: 'required|length:4',
        pointId: 'required|length:4'
      }
    };
  }
};

var vModel = {
  props: {
    value: {}
  },
  computed: {
    vModel: vueModel
  }
};
var mixins = {
  vModel: vModel,
  form: formMixin,
  validation: validationMixin
};

var MFieldMixin = {
  props: {
    value: {},
    placeholder: String,
    name: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    mdCounter: [String, Number]
  },
  data: function data() {
    return {
      localValue: this.value,
      textareaHeight: false
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.localValue;
      },
      set: function set(value) {
        var _this = this;

        if (value.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
          this.$nextTick(function () {
            _this.localValue = value;
            _this.MField.hasInvalidValue = _this.isInvalidValue();
          });
        }
      }
    },
    clear: function clear() {
      return this.MField.clear;
    },
    attributes: function attributes() {
      return Object.assign(Object.assign({}, this.$attrs), {}, {
        type: this.type,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength
      });
    }
  },
  watch: {
    model: function model() {
      this.setFieldValue();
    },
    clear: function clear(_clear) {
      if (_clear) {
        this.clearField();
      }
    },
    placeholder: function placeholder() {
      this.setPlaceholder();
    },
    disabled: function disabled() {
      this.setDisabled();
    },
    required: function required() {
      this.setRequired();
    },
    maxlength: function maxlength() {
      this.setMaxlength();
    },
    mdCounter: function mdCounter() {
      this.setMaxlength();
    },
    localValue: function localValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.localValue = val;
    }
  },
  methods: {
    clearField: function clearField() {
      this.$el.value = '';
      this.model = '';
      this.setFieldValue();
    },
    setLabelFor: function setLabelFor() {
      this.MField.id = this.id;
    },
    setFormResetListener: function setFormResetListener() {
      if (!this.$el.form) {
        return;
      }

      var parentForm = this.$el.form;
      parentForm.addEventListener('reset', this.onParentFormReset);
    },
    removeFormResetListener: function removeFormResetListener() {
      if (!this.$el.form) {
        return;
      }

      var parentForm = this.$el.form;
      parentForm.removeEventListener('reset', this.onParentFormReset);
    },
    onParentFormReset: function onParentFormReset() {
      this.clearField();
    },
    isInvalidValue: function isInvalidValue() {
      return this.$el.validity.badInput;
    },
    setFieldValue: function setFieldValue() {
      this.MField.value = this.model;
    },
    setPlaceholder: function setPlaceholder() {
      this.MField.placeholder = Boolean(this.placeholder);
    },
    setDisabled: function setDisabled() {
      this.MField.disabled = Boolean(this.disabled);
    },
    setRequired: function setRequired() {
      this.MField.required = Boolean(this.required);
    },
    setMaxlength: function setMaxlength() {
      if (this.mdCounter) {
        this.MField.counter = parseInt(this.mdCounter, 10);
      } else {
        this.MField.maxlength = parseInt(this.maxlength, 10);
      }
    },
    onFocus: function onFocus() {
      this.MField.focused = true;
    },
    onBlur: function onBlur() {
      this.MField.focused = false;
    }
  },
  created: function created() {
    this.setFieldValue();
    this.setPlaceholder();
    this.setDisabled();
    this.setRequired();
    this.setMaxlength();
  },
  mounted: function mounted() {
    this.setLabelFor();
    this.setFormResetListener();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeFormResetListener();
  }
};

//
var script$1 = {
  name: 'a-input',
  mixins: [MFieldMixin, mixins.vModel],
  inject: ['MField'],
  props: {
    id: {
      type: String,
      "default": function _default() {
        return 'a-input-' + Math.random().toString(36).slice(4);
      }
    },
    type: {
      type: String,
      "default": 'text'
    }
  },
  computed: Object.assign(Object.assign({
    currentTypePassword: function currentTypePassword() {
      return this.MField.currentTypePassword;
    },
    defaultTypePassword: function defaultTypePassword() {
      return this.type === 'password';
    }
  }, listeners(['input'])), {}, {
    classes: function classes() {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.MField.error,
        'f-correct': this.MField.correct,
        'f-icon': this.MField.error || this.defaultTypePassword
      };
    }
  }),
  watch: {
    type: function type() {
      this.setPassword(this.defaultTypePassword);
    },
    currentTypePassword: function currentTypePassword(toggle) {
      if (toggle) {
        this.setTypePassword();
      } else {
        this.setTypeText();
      }
    }
  },
  methods: {
    setPassword: function setPassword(state) {
      this.MField.defaultTypePassword = state;
      this.MField.currentTypePassword = state;
    },
    setTypePassword: function setTypePassword() {
      this.$el.type = 'password';
    },
    setTypeText: function setTypeText() {
      this.$el.type = 'text';
    }
  },
  created: function created() {
    this.setPassword(this.defaultTypePassword);
  },
  beforeDestroy: function beforeDestroy() {
    this.setPassword(false);
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.attributes.type === 'checkbox' ? _c('input', _vm._g(_vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vModel,
      expression: "vModel"
    }],
    staticClass: "a-input",
    "class": _vm.classes,
    attrs: {
      "id": _vm.id,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.vModel) ? _vm._i(_vm.vModel, null) > -1 : _vm.vModel
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "change": function change($event) {
        var $$a = _vm.vModel,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.vModel = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.vModel = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.vModel = $$c;
        }
      }
    }
  }, 'input', _vm.attributes, false), _vm.listeners)) : _vm.attributes.type === 'radio' ? _c('input', _vm._g(_vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vModel,
      expression: "vModel"
    }],
    staticClass: "a-input",
    "class": _vm.classes,
    attrs: {
      "id": _vm.id,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.vModel, null)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "change": function change($event) {
        _vm.vModel = null;
      }
    }
  }, 'input', _vm.attributes, false), _vm.listeners)) : _c('input', _vm._g(_vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vModel,
      expression: "vModel"
    }],
    staticClass: "a-input",
    "class": _vm.classes,
    attrs: {
      "id": _vm.id,
      "type": _vm.attributes.type
    },
    domProps: {
      "value": _vm.vModel
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.vModel = $event.target.value;
      }
    }
  }, 'input', _vm.attributes, false), _vm.listeners));
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script$2 = {
  name: 'a-label',
  inject: ['MField'],
  computed: Object.assign({
    id: function id() {
      return this.MField.id;
    },
    hasValue: function hasValue() {
      return typeof this.MField.value === 'string' && this.MField.value !== '';
    },
    hasError: function hasError() {
      return this.MField.error;
    },
    classes: function classes() {
      var MField = this.MField;
      return {
        'f-reduced': this.hasValue || MField.focused,
        'f-focused': MField.focused,
        'f-disabled': MField.disabled,
        'f-correct': MField.correct,
        'f-error': this.hasError
      };
    }
  }, listeners())
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('label', _vm._g({
    staticClass: "a-label f-field",
    "class": _vm.classes,
    attrs: {
      "for": _vm.id
    }
  }, _vm.listeners), [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$3 = {
  name: 'm-field',
  components: {
    IconEye: IconEye,
    IconEyeOff: IconEyeOff,
    IconAlert: IconAlert,
    IconCheckBold: IconCheckBold
  },
  props: {
    error: {
      type: Boolean,
      "default": false
    },
    correct: {
      type: Boolean,
      "default": false
    },
    assist: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      MField: {
        id: '',
        value: null,
        currentTypePassword: false,
        defaultTypePassword: false,
        focused: false,
        disabled: false,
        correct: false,
        error: false
      }
    };
  },
  provide: function provide() {
    return {
      MField: this.MField
    };
  },
  computed: {
    isPassword: function isPassword() {
      return this.MField.defaultTypePassword === true;
    },
    passwordShown: {
      get: function get() {
        return this.MField.currentTypePassword === false;
      },
      set: function set(passwordShown) {
        this.MField.currentTypePassword = passwordShown === false;
      }
    },
    additionalClasses: function additionalClasses() {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.isPassword
      };
    }
  },
  watch: {
    error: function error(state) {
      this.MField.error = state;
    },
    correct: function correct(state) {
      this.MField.correct = state;
    }
  },
  created: function created() {
    this.MField.error = this.error;
    this.MField.correct = this.correct;
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "m-field"
  }, [_vm._t("default"), _vm._v(" "), _vm.isPassword && _vm.passwordShown === false ? _c('icon-eye', {
    staticClass: "a-icon f-input",
    attrs: {
      "size": 26
    },
    on: {
      "click": function click($event) {
        _vm.passwordShown = true;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.isPassword && _vm.passwordShown ? _c('icon-eye-off', {
    staticClass: "a-icon f-input",
    attrs: {
      "size": 26
    },
    on: {
      "click": function click($event) {
        _vm.passwordShown = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.error && _vm.isPassword === false ? _c('icon-alert', {
    staticClass: "a-icon f-input f-error",
    attrs: {
      "size": 26
    }
  }) : _vm._e(), _vm._v(" "), _vm.correct && _vm.isPassword === false && _vm.error === false ? _c('icon-check-bold', {
    staticClass: "a-icon f-input f-correct",
    attrs: {
      "size": 26
    }
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
var script$4 = {
  name: 'm-select',
  components: {
    IconCancel: IconCancel
  },
  mixins: [mixins.vModel],
  props: {
    /**
     * options: [{label: String, value: String}]
     */
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      "default": ''
    },
    error: {
      type: Boolean,
      "default": false
    },
    correct: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      id: '',
      optionsAreOpen: false,
      optionsAreOutsideWindow: false,
      pointedOption: -1
    };
  },
  mounted: function mounted() {
    var randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-select-' + randomNumber;
    this.resetPointedOption();
  },
  computed: {
    label: function label() {
      var _this = this;

      var option = this.options.find(function (option) {
        return option.value === _this.vModel;
      });
      return option ? option.label : '';
    },
    additionalClasses: function additionalClasses() {
      return {
        'f-filled': this.label !== '',
        'f-error': this.error,
        'f-correct': this.correct
      };
    }
  },
  methods: {
    resetPointedOption: function resetPointedOption() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.vModel;

      if (logical.isNull(value)) {
        this.pointedOption = -1;
      } else {
        this.pointedOption = this.options.findIndex(function (option) {
          return option.value === value;
        });
      }
    },
    focusAndToggle: function focusAndToggle() {
      this.$refs.input.focus();
      this.toggleOptions();
    },
    closeOptions: function closeOptions() {
      var _this2 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        resetPointedOption: true
      };
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this2.optionsAreOpen = false;

          if (config.resetPointedOption) {
            _this2.resetPointedOption();
          }

          resolve();
        });
      });
    },
    toggleOptions: function toggleOptions() {
      var _this3 = this;

      this.optionsAreOpen = this.optionsAreOpen === false;
      this.resetPointedOption();

      if (this.optionsAreOpen) {
        this.$nextTick(function () {
          var options = _this3.$refs.options;
          var optionsProps = options.getBoundingClientRect();
          var optionsHeight = optionsProps.height;
          var optionsTop = optionsProps.top;
          var windowHeight = window.outerHeight;
          _this3.optionsAreOutsideWindow = optionsHeight + optionsTop + 8 >= windowHeight;
        });
      } else {
        this.optionsAreOutsideWindow = false;
      }
    },
    chooseOption: function chooseOption(_ref) {
      var _this4 = this;

      var value = _ref.value,
          index = _ref.index;

      if (logical.isDefined(index)) {
        value = this.options[index].value;
      }

      this.closeOptions({
        resetPointedOption: false
      }).then(function () {
        _this4.$emit('change', value);

        _this4.vModel = value;

        _this4.resetPointedOption(value);
      });
    },
    chooseAndToggleOptions: function chooseAndToggleOptions() {
      var index = this.pointedOption;

      if (this.optionsAreOpen && index >= 0) {
        this.chooseOption({
          index: index
        });
      } else {
        this.toggleOptions();
      }
    },
    optionSwitch: function optionSwitch(index) {
      if (this.optionsAreOpen === false) {
        this.chooseOption({
          index: index
        });
      }
    },
    optionUp: function optionUp() {
      if (this.pointedOption - 1 < 0) {
        this.pointedOption = this.options.length - 1;
      } else {
        this.pointedOption -= 1;
      }

      this.optionSwitch(this.pointedOption);
    },
    optionDown: function optionDown() {
      if (this.pointedOption + 1 > this.options.length - 1) {
        this.pointedOption = 0;
      } else {
        this.pointedOption += 1;
      }

      this.optionSwitch(this.pointedOption);
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "m-input f-relative"
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.closeOptions,
      expression: "closeOptions"
    }],
    staticClass: "a-field f-select",
    "class": _vm.additionalClasses,
    on: {
      "click": _vm.toggleOptions
    }
  }, [_c('input', {
    ref: "input",
    staticClass: "a-input f-select",
    "class": _vm.additionalClasses,
    attrs: {
      "id": _vm.id,
      "readonly": ""
    },
    domProps: {
      "value": _vm.label
    },
    on: {
      "focusout": _vm.closeOptions,
      "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.closeOptions($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.chooseAndToggleOptions($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.optionUp($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.optionDown($event);
      }]
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "a-label f-field",
    "class": {
      'f-correct': _vm.correct,
      'f-error': _vm.error
    },
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v("\n    " + _vm._s(_vm.placeholder) + "\n  ")]), _vm._v(" "), _c('icon-cancel', {
    staticClass: "a-icon f-input",
    attrs: {
      "size": 26
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.focusAndToggle($event);
      }
    }
  }), _vm._v(" "), _vm.optionsAreOpen ? _c('div', {
    ref: "options",
    staticClass: "m-options",
    "class": {
      'f-top': _vm.optionsAreOutsideWindow
    }
  }, _vm._l(_vm.options, function (option, index) {
    return _c('div', {
      key: option.value,
      staticClass: "a-option",
      "class": {
        'f-selected': option.value === _vm.vModel,
        'f-pointed': _vm.pointedOption === index
      },
      on: {
        "click": function click($event) {
          return _vm.chooseOption(option);
        }
      }
    }, [_vm._v("\n      " + _vm._s(option.label) + "\n    ")]);
  }), 0) : _vm._e()], 1);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var script$5 = {
  name: 'm-resize-auto',
  methods: {
    resize: function resize(event) {
      event.target.style.height = 'auto';
      event.target.style.height = "".concat(event.target.scrollHeight + 4, "px");
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$el.setAttribute('style', 'height', "".concat(_this.$el.scrollHeight + 4, "px"));
    });
  },
  render: function render() {
    return this.$scopedSlots["default"]({
      resize: this.resize
    });
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
var script$6 = {
  name: 'm-textarea',
  mixins: [mixins.vModel],
  components: {
    MResizeAuto: __vue_component__$5,
    IconAlert: IconAlert,
    IconCheckBold: IconCheckBold
  },
  props: {
    placeholder: {
      type: String,
      "default": ''
    },
    type: {
      type: String,
      "default": ''
    },
    error: {
      type: Boolean,
      "default": false
    },
    correct: {
      type: Boolean,
      "default": false
    },
    assist: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      id: '',
      showPassword: false
    };
  },
  mounted: function mounted() {
    var randomNumber = Math.floor(Math.random() * 10000);
    this.id = 'id-input-' + randomNumber;
  },
  computed: {
    isPassword: function isPassword() {
      return this.type === 'password';
    },
    additionalClasses: function additionalClasses() {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.isPassword
      };
    },
    getType: function getType() {
      if (this.isPassword) {
        return this.showPassword ? '' : this.type;
      } else {
        return this.type;
      }
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "m-field"
  }, [_c('m-resize-auto', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var resize = ref.resize;
        return [_c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.vModel,
            expression: "vModel"
          }],
          staticClass: "a-field f-textarea",
          "class": _vm.additionalClasses,
          attrs: {
            "id": _vm.id,
            "type": _vm.getType
          },
          domProps: {
            "value": _vm.vModel
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.vModel = $event.target.value;
            }, resize]
          }
        })];
      }
    }])
  }), _vm._v(" "), _c('label', {
    staticClass: "a-label f-field",
    "class": {
      'f-correct': _vm.correct,
      'f-error': _vm.error
    },
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v("\n    " + _vm._s(_vm.placeholder) + "\n  ")]), _vm._v(" "), _vm.error ? _c('icon-alert', {
    staticClass: "a-icon f-input f-error",
    attrs: {
      "size": 26
    }
  }) : _vm._e(), _vm._v(" "), _vm.correct && _vm.error === false ? _c('icon-check-bold', {
    staticClass: "a-icon f-input f-correct",
    attrs: {
      "size": 26
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "a-assist",
    "class": {
      'f-error': _vm.error
    }
  }, [_vm._v("\n    " + _vm._s(_vm.assist) + "\n  ")])], 1);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var components = {
  AAssist: __vue_component__,
  AInput: __vue_component__$1,
  ALabel: __vue_component__$2,
  MField: __vue_component__$3,
  MSelect: __vue_component__$4,
  MTextarea: __vue_component__$6
};
var index = Object.assign(Object.assign({}, components), {}, {
  install: function install(Vue, options) {
    for (var componentName in components) {
      var component = components[componentName];
      Vue.component(component.name, component);
    }
  }
});

module.exports = index;
