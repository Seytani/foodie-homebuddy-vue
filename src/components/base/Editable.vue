<template>
  <div class="editable d-iflex mr-5 fai-center" @click="$emit('click')">
    <slot />
    <span class="material-icons editable__icon">edit</span>
  </div>
</template>

<script>
export default {
  name: 'FEditable',
}
</script>

<style lang="scss" scoped>
.editable {
  cursor: pointer;

  &__icon {
    color: $color-green-3;
    margin-left: 10px;
    opacity: 0;
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
}

</style>