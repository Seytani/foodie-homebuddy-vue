import Editor from '@/components/Editor.vue';

export default {
  title: 'Other/Editor',
  component: Editor,
}

const Template = args => ({
  components: { Editor },

  setup() {
    return { args };
  },

  template: '<Editor />',
});

export const Default = Template.bind({});