<template>
  <button
    @click="$emit('click')"
    class="new-button"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'new-button',
    props: {
      text: {
        type: String,
        default: '',
      }
    }
  };
</script>
