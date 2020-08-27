<template>
  <label
    class="a-label f-field"
    :class="classes"
    :for="id"
  >
    <slot/>
  </label>
</template>

<script>
export default {
  name: 'a-label',
  inject: ['MField'],
  computed: {
    id () {
      return this.MField.id
    },
    hasValue () {
      return typeof this.MField.value === 'string' && this.MField.value !== ''
    },
    hasError() {
      return this.MField.error
    },
    classes() {
      const MField = this.MField
      return {
        'f-reduced': this.hasValue || MField.focused,
        'f-focused': MField.focused,
        'f-disabled': MField.disabled,
        'f-correct': MField.correct,
        'f-error': this.hasError,
      }
    }
  },
};
</script>
