<template>
  <div
    class="a-assist"
    :class="classes"
    v-on="listeners"
  >
    <slot/>
  </div>
</template>

<script>
import { listeners } from '../extends/base';

export default {
  name: 'a-assist',
  inject: ['MField'],
  computed: {
    ...listeners(),
    classes () {
      return {
        'f-error': this.MField.error,
      };
    },
  },
};
</script>
