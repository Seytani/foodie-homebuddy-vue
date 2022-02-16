import Button from '@/components/base/Button.vue';

export default {
  title: 'Base/Button',

  component: Button,

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'circular', 'circular-secondary']
    }
  }
};

const Template = args => ({
  components: { Button },

  setup() {
    const { variant } = args;
    console.log(args);
    const text = variant.includes('circular') ? 'Pri' : 'Primary'
    return { args, text }
  },

  template: '<Button v-bind="args">{{ text }}</Button>'
})

export const Default = Template.bind({});
