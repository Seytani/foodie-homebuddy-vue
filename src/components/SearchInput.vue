<template>
  <div class="search-input d-flex fai-center">
    <span class="search-input__icon material-icons">search</span>
    <input
      class="search-input__input"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
import "@/assets/styles/components/base/SearchInput.scss";

export default {
  name: 'SearchInput',

  props: { 
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue']
}
</script>