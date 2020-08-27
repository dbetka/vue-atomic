<template>
  <input
    :id="id"
    class="a-input"
    v-bind="attributes"
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
    currentTypePassword () {
      return this.MField.currentTypePassword;
    },
    defaultTypePassword () {
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
        'f-error': this.MField.error,
        'f-correct': this.MField.correct,
        'f-icon': this.MField.error || this.defaultTypePassword,
      };
    },
  },
  watch: {
    type () {
      this.setPassword(this.defaultTypePassword);
    },
    currentTypePassword (toggle) {
      if (toggle) {
        this.setTypePassword();
      } else {
        this.setTypeText();
      }
    },
  },
  methods: {
    setPassword (state) {
      this.MField.defaultTypePassword = state;
      this.MField.currentTypePassword = state;
    },
    setTypePassword () {
      this.$el.type = 'password';
    },
    setTypeText () {
      this.$el.type = 'text';
    },
  },
  created () {
    this.setPassword(this.defaultTypePassword);
  },
  beforeDestroy () {
    this.setPassword(false);
  },
};
</script>
