import SearchInput from '@/components/SearchInput.vue'

export default {
  title: 'Other/SearchInput',
  component: SearchInput,
}

const Template = args => ({
  components: { SearchInput },

  setup() {
    return { args };
  },

  template: '<SearchInput v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 'Test',
}