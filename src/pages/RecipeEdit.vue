<template>
  <div class="recipe-edit">
    <div class="recipe-edit__header d-flex mb-30">
      <div class="info fgrow-1">
        <f-editable class="mb-20">
          <h1 class="info__title">
            {{ recipe.name || 'My Recipe' }}
          </h1>
        </f-editable>
        <div class="info__last-prep mb-20">
          Last prep: <span>3 weeks ago</span>
        </div>
        <div class="info__tags mb-30">
          <span>mexican</span>
        </div>
        <div class="info__stats d-flex mb-40">
          <div class="stat fgrow-1">
            <div class="stat__value">
              0
            </div>
            <div class="stat__name">
              ingredients
            </div>
          </div>
          <div class="stat fgrow-1">
            <div class="stat__value">
              0
            </div>
            <div class="stat__name">
              prep time
            </div>
          </div>
          <div class="stat fgrow-1">
            <div class="stat__value">
              0
            </div>
            <div class="stat__name">
              calories
            </div>
          </div>
        </div>
        <div info__actions>
          <f-button @click="handleAddToMealPlan">Add to meal plan</f-button>
        </div>
      </div>
      <div class="recipe-edit__image">
        <img src="/default-recipe.jpg" alt="">
      </div>
    </div>
    <hr class="mb-20">
    <div class="ingredients mb-20">
      <h4 class="mb-20">Ingredients</h4>
      <f-button>Add Ingredient</f-button>
    </div>
    <editor v-model="content" />
  </div>
</template>

<script>
import Editor from "@/components/editor/Editor.vue";

export default {
  name: 'RecipeEdit',

  components: { Editor },

  data() {
    return {
      name: '',
      content: '',
    };
  },

  computed: {
    recipeId() {
      return parseInt(this.$route.params.id);
    },

    recipe() {
      return this.$store.state.recipes.recipes?.[this.recipeId];
    }
  },

  mounted() {
    if (!this.recipeId || this.recipeId === 'new') {
      return;
    }
    this.$store.dispatch('recipes/fetchRecipe', this.recipeId);
  },

  methods: {
    handleAddToMealPlan() {
      alert('working');
    }
  },
}
</script>

<style lang="scss" scoped>
.recipe-edit {
  width: 980px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 40px;

  &__header {
    .info {
      &__last-prep {
        span {
          color: $color-blue-2
        }
      }

      &__tags {
        span {
          font-size: 13px;
          color: $color-off-white;
          padding: 5px 8px;
          font-weight: bold;
          background-color: $color-tangy-mustard;
          border-radius: 25px;
        }
      }

      &__stats {
        width: 450px;

        .stat {
          text-align: center;
          border-right: 1px solid $color-gray-1;

          &:last-child {
            border: none;
          }

          &__value {
            font-size: 40px;
          }
        }
      }
    }
  }

  &__image {
    border-radius: 25px;
    height: 480px;
    overflow: hidden;

    img {
      width: 480px;
    }
  }
}

</style>