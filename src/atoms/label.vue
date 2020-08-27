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
      return this.MField.value
    },
    classes() {
      return {
        'f-reduced': this.hasValue || this.MField.focused,
        'f-focused': this.MField.focused,
        'f-disabled': this.MField.disabled,
        'f-correct': this.MField.correct,
        'f-error': this.MField.error,
      }
    }
  },
};
</script>
