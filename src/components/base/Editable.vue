<template>
  <div class="editable d-flex mr-5 fai-center" @click="emit('click')">
    <slot />
    <Button variant="invisible">
      <span
        v-show="!showControls"
        class="material-icons editable__icon hidden"
      >
        edit
      </span>
    </Button>
    <Button variant="invisible" @click.stop="$emit('ok')">
      <span
        v-show="showControls"
        class="material-icons editable__icon"
      >
        check_circle_outline
      </span>
    </Button>
    <Button variant="invisible" @click.stop="$emit('cancel')">
      <span
        v-show="showControls"
        class="material-icons editable__icon"
      >
        highlight_off
      </span>
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue"

export default {
  name: 'FEditable',

  components: { Button },

  props: {
    showControls: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click', 'ok', 'cancel'],

  methods: {
    emit(event) {
      if (this.showControls) {
        return;
      }
      this.$emit(event);
    }
  },

}
</script>

<style lang="scss" scoped>
.editable {
  cursor: pointer;

  &__icon {
    color: $color-green-3;
    margin-left: 10px;

    &.hidden {
      opacity: 0;
    }
  }

  &:hover {
    span {
      opacity: 1;
    }
  }
}

</style>