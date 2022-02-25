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
  },

  async updateRecipe(context, { id, name, content }) {
    const newRecipe = await this.$http.put(`recipe/${id}`,{ name, content } );
    const recipes = { ...context.state.recipes };
    recipes[id] = newRecipe;
    context.commit('SET_RECIPES', recipes);
  },

  async updateRecipeImage(context, { id, blob }) {
    const form = new FormData();
    form.append('file', blob);
    const newRecipe = await this.$http({
      method: 'put',
      url: `recipe/${id}`,
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const recipes = { ...context.state.recipes };
    recipes[id] = newRecipe;
    context.commit('SET_RECIPES', recipes);
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
