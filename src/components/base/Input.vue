<template>
  <div class="input">
    <div class="input__container d-flex" :class="{ active }">
      <label
        class="input__label"
        :class="{ active }"
        for=""
      >
        Label
      </label>
      <input
        class="input__input"
        type="text"
        @focus="active = true"
        @blur="active = false"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FInput',

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
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
          transform: translateY(-18px) scale(.75);
        }
    } 

    &__input {
        width: 100%;
    }
}
</style>
