<template>
  <button
    class="btn"
    :class="extraClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FButton',

  props: {
    variant: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  computed: {
    extraClasses() {
      if (!this.variant){
        return;
      }
      const classHash = {};
      classHash[`btn-${this.variant}`] = true;
      return classHash;
    }
  }
}
</script>

<style lang="scss" scoped>

.btn {
	min-width: 64px;
	padding: 6px 16px;
	border: none;
	background-color: $color-green-3;
	color: white;
	border-radius: 16px;
	cursor: pointer;
	box-shadow: 0px 5px 2px -2px $color-gray-1;

	&:hover {
		background-color: $color-stem;
	}

	&.btn-secondary,
	&.btn-circular-secondary {
		background-color: $color-gray-2;
	}

	&.btn-circular,
	&.btn-circular-secondary {
		min-width: unset;
		padding: 0;
		display: flex;
	}

  &.btn-invisible {
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin: 0;
    color: unset;
    min-width: 0;
  }
}

[disabled] {
	background-color: $color-gray-2;
	&:hover {
		cursor: not-allowed;
		background-color: $color-gray-2;
	}
}
</style>