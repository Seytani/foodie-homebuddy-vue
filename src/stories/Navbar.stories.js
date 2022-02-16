import vueRouter from 'storybook-vue3-router';
import '@/assets/styles/index.scss';
import Navbar from '@/components/Navbar.vue';
import { routes } from '@/router.js';

export default {
  title: 'Other/Navbar',
  component: Navbar,
}

const Template = args => ({
  components: { Navbar },

  setup() {
    return { args }
  },

  template: '<Navbar />',
});

export const Default = Template.bind({});
Default.decorators = [ vueRouter(routes) ];