import Menu from '@/components/base/Menu.vue'
import Button from '@/components/base/Button.vue'

export default {
  title: 'Base/Menu',
  component: Menu,
};

const Template = args => ({
  components: { Menu, Button },

  setup() {
    return { args }
  },

  template: '<Menu><Button>Test Me</ Button></ Menu>'
});

export const Default = Template.bind({})