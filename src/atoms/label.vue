<template>
  <label
    class="a-label f-field"
    :class="classes"
  >
    <slot/>
  </label>
</template>

<script>
export default {
  name: 'a-label',
  inject: ['MField'],
  computed: {
    hasValue () {
      return this.MField.value
    },
    isFocused () {
      return this.MField.focused
    },
    isDisabled () {
      return this.MField.disabled
    },
    classes() {
      return {
        'f-reduced': this.hasValue || this.isFocused,
        'f-focused': this.isFocused,
        'f-disabled': this.isDisabled,
      }
    }
  },
};
</script>
