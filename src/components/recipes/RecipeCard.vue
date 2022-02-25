<template>
  <div class="recipe">
    <img :src="recipeImage" alt="recipe placeholder" class="recipe__image">
    <div class="recipe__desc">
      <h5 class="title">
        {{ recipe.name }}
      </h5>
      <div class="d-flex">
        <div class="fgrow-1">
          <div class="subtitle">
            <span>45 min</span>
          </div>
          <div class="ingredient-availability">
            <span class="material-icons">kitchen</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',

  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },

  computed: {
    recipeImage() {
      if (this.recipe?.image_url) {
        return process.env.VUE_APP_IMAGE_STORE + this.recipe.image_url;
      }
      return '/roasted-veggies.jpg';
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe {
  &__image {
    width: 220px;
    margin-bottom: 12px;
  }

  &__desc {
    color: $color-gray-5;

    .title {
      font-weight: 500;
      margin-bottom: 7px;
    }

    .subtitle {
      color: $color-gray-3;
      margin-bottom: 7px;
    }

    .ingredient-availability {
      color: $color-green-3;
    }
  }
}
</style>