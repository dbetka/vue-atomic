<template>
  <input
    :id="id"
    class="a-input"
    :class="additionalClasses"
    v-on="listeners"
    v-model="vModel"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script>
import { mixins } from '../mixins/base';
import MFieldMixin from '../mixins/m-field'

export default {
  name: 'a-input',
  mixins: [MFieldMixin, mixins.vModel],
  inject: ['MField'],
  props: {
    id: {
      type: String,
      default: () => 'a-input-' + Math.random().toString(36).slice(4),
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    toggleType () {
      return this.MField.typePassword;
    },
    isPassword () {
      return this.type === 'password';
    },
    listeners () {
      var l = { ...this.$listeners };
      delete l.input;
      return l;
    },
    additionalClasses () {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.isPassword,
      };
    },
  },
  watch: {
    type (type) {
      this.setPassword(this.isPassword);
    },
    toggleType (toggle) {
      if (toggle) {
        this.setTypeText();
      } else {
        this.setTypePassword();
      }
    },
  },
  methods: {
    setPassword (state) {
      this.MField.typePassword = state;
      this.MField.showPassword = false;
    },
    setTypePassword () {
      this.$el.type = 'password';
    },
    setTypeText () {
      this.$el.type = 'text';
    },
  },
  created () {
    this.setPassword(this.isPassword);
    this.$attrs.slot = 'input';
    console.log(this.$attrs);
  },
  beforeDestroy () {
    this.setPassword(false);
  },
};
</script>
