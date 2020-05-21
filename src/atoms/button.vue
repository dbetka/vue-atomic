<template>
  <button
    @click="$emit('click')"
    class="a-button2"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'a-button2',
    props: {
      text: {
        type: String,
        default: '',
      }
    }
  };
</script>
