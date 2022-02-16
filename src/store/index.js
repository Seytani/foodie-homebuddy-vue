import { createStore } from 'vuex';
import recipes from './recipes';

export default createStore({
  modules: {
    recipes,
  },
});
