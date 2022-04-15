<template>
  <div>
    <div ref="activatorContainer">
      <slot name="activator" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FMenu',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

};
</script>