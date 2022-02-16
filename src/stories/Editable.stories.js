import Editable from '@/components/base/Editable.vue'

export default {
  title: 'Base/Editable',
  component: Editable
}

const Template = args => ({
  components: { Editable },

  setup() {
    return { args }
  },

  template: `<Editable v-bind="args">
    <h1>Content<h1>
  </Editable>`,
});

export const Default = Template.bind({});