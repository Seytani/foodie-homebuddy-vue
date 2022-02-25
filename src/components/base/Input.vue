<template>
  <div class="input">
    <div class="input__container d-flex" :class="{ active, 'has-content': hasContent }">
      <label
        class="input__label"
        :class="{ active, 'has-content': hasContent }"
        for=""
      >
        {{ this.label }}
      </label>
      <input
        class="input__input"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="active = true"
        @blur="active = false"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FInput',

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    }
  },

  emits: ['update:modelValue'],

  data() {
    return {
      active: false,
      hasContent: false,
    };
  },

  watch: {
    modelValue(newValue) {
      this.hasContent = !!newValue;
    }
  },

  mounted() {
    this.hasContent = !!this.modelValue;
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;

    &__container {
        position: relative;

        &::before {
            border-color: $color-black;
            border-style: solid;
            border-width: thin 0 0;
            bottom: -1px;
            content: "";
            position: absolute;
            width: 100%;
        }

        &.active::before {
          border-color: $color-green-4;
        }

        &::after {
          bottom: -1px;
          content: "";
          left: 0;
          position: absolute;
          transition: .4s cubic-bezier(.25,.8,.5,1);
          width: 100%;
          background-color: $color-green-4;
          border-color: $color-green-4;
          border-style: solid;
          border-width: thin 0 thin 0;
          transform: scaleX(0);
        }

        &.active::after {
          transform: scaleX(1);
        }
    }

    &__label {
        position: absolute;
        right: auto;
        left: 0px;
        transition: .3s cubic-bezier(.25,.8,.5,1);

        &.active {
          color: $color-green-4;
          transform: translateY(-18px) translateX(-15px) scale(.75);
        }

        &.has-content {
          transform: translateY(-18px) translateX(-15px) scale(.75);
        }
    } 

    &__input {
        font-size: 16px;
        width: 100%;
    }
}
</style>
