<template>
  <button @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'a-button',
  };
</script>
