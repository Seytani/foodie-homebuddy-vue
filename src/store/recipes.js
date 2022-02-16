//import client from '@/api.js';

const state = () => {
  return {
    recipes: null,
  };
};

const mutations = {
  SET_RECIPES(state, recipes) {
    state.recipes = recipes;
  }
}

const actions = {
  async fetchRecipes(context) {
    const recipes = await this.$http.get('recipes');
    context.commit('SET_RECIPES', hashResponse(recipes));
  },

  async fetchRecipe(context, id) {
    const recipe = await this.$http.get(`recipe/${id}`);
    context.commit('SET_RECIPES', hashResponse([recipe]));
  }
}

function hashResponse(res) {
  const hash = {};
  for (const obj of res) {
    hash[obj.id] = obj
  }

  return hash;
}

export default { state, mutations, actions, namespaced: true };
