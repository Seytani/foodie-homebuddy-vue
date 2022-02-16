<template>
  <div class="recipe-page">
    <div class="recipe-header d-flex fjc-center">
      <search-input v-model="searchQuery" />
    </div>
    <ul class="recipe-list d-flex flex-wrap">
      <li v-for="recipe of recipes"  :key="recipe.id">
        <router-link :to="`/recipes/${recipe.id}`">
          <recipe-card  :recipe="recipe" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RecipeCard from '../components/recipes/RecipeCard.vue';
import SearchInput from "../components/SearchInput.vue"

export default {
  name: 'RecipePage',

  components: { RecipeCard, SearchInput },

  data() {
    return {
      searchQuery: '',
    }
  },

  computed: {
    ...mapState('recipes', ['recipes']),
  },

  mounted() {
    this.$store.dispatch('recipes/fetchRecipes');
  },

  methods: {
    handleClick() {
      this.$store.dispatch('recipes/fetchRecipes');
    }
  }
}
</script>

<style lang="scss" scoped>

.recipe-page {
  width: 1080px;
  margin: 0 auto;

  .recipe-header {
    padding-top: 30px;
    margin-bottom: 60px;
  }

  .recipe-list {
    gap: 66px;
  }
}
</style>