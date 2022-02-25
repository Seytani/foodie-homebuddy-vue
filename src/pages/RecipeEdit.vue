<template>
  <div class="recipe-edit">
    <div class="recipe-edit__header d-flex mb-30">
      <div class="info fgrow-1">
        <f-editable class="mb-20"
          :show-controls="showNameFieldControls"
          @click="toggleEditNameField"
          @cancel="toggleEditNameField"
          @ok="saveName"
        >
          <h1 v-if="!showNameFieldInput" class="info__title">
            {{ name }}
          </h1>
          <f-input v-model="name" label="Recipe Name" v-else />
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
      <recipe-image
        :image="recipeImageUrl"
        @save="saveImage"
      />
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
import debounce from 'lodash/fp/debounce';
import 'vue-advanced-cropper/dist/style.css';
import Editor from "@/components/recipes/editor/Editor.vue";
import RecipeImage from '@/components/recipes/RecipeImage.vue';

export default {
  name: 'RecipeEdit',

  components: { Editor, RecipeImage },

  data() {
    return {
      content: '',
      name: '',
      showNameFieldInput: false,
      showNameFieldControls: false,
      showCropper: false,
    };
  },

  computed: {
    recipeId() {
      return parseInt(this.$route.params.id);
    },

    recipe() {
      return this.$store.state.recipes.recipes?.[this.recipeId] || null;
    },

    recipeImageUrl() {
      if (!this.recipe?.image_url) {
        return '/default-recipe.jpg';
      }
      return process.env.VUE_APP_IMAGE_STORE + this.recipe.image_url;
    },

    debounceSaveContent() {
      return debounce(900, this.saveContent);
    }
  },

  watch: {
    content(value) {
      const isSame = this.recipe.content === value;
      if (isSame) {
        return;
      }
      this.debounceSaveContent();
    }
  },

  async mounted() {
    if (!this.recipeId || this.recipeId === 'new') {
      return;
    }
    await this.$store.dispatch('recipes/fetchRecipe', this.recipeId);
    this.name = this.recipe.name || 'My Recipe';
    this.content = this.recipe.content;
  },

  methods: {
    handleAddToMealPlan() {
      alert('working');
    },

    toggleEditNameField() {
      this.name = this.recipe.name || 'My Recipe';
      this.showNameFieldInput = !this.showNameFieldInput;
      this.showNameFieldControls = !this.showNameFieldControls;
    },

    async saveImage(blob) {
      const payload = { id: this.recipe.id, blob };
      await this.$store.dispatch('recipes/updateRecipeImage', payload);
    },


    async saveName() {
      const payload = { id: this.recipe.id, name: this.name };
      await this.$store.dispatch('recipes/updateRecipe', payload);
      this.toggleEditNameField();
    },

    async saveContent() {
      const payload = { id: this.recipe.id, content: this.content };
      await this.$store.dispatch('recipes/updateRecipe', payload);
    },
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
      padding-right: 40px;

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
    position: relative;
    border-radius: 25px;
    height: 480px;
    min-width: 480px;
    overflow: hidden;

    &:hover {
      .curtain {
        opacity: .3;
      }

      .edit {
        opacity: 1;
      }
    }

    .curtain,
    .edit {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
    .curtain {
      background-color: $color-green-3;
    }

    .edit {
      &__icon {
        color: white;
        font-size: 80px;
      }
    }

    img {
      width: 480px;
    }
  }
}

</style>