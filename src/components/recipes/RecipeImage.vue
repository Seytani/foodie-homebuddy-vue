<template>
  <div class="image shadow-box">
    <div v-if="!showCropper" class="image__curtain" />
    <div
      v-if="!showCropper"
      class="image__edit d-flex fjc-center fai-center"
      @click="this.$refs.fileButton.click()"
    >
      <span class="material-icons edit-icon">edit</span>
    </div>
    <img v-if="!showCropper" :src="image" alt="default recipe image">
    <cropper
      v-else
      ref="cropper"
      class="cropper"
      :src="newImage"
      :stencil-props="{ aspectRatio: 1/1 }"
    />
    <div class="cropper__controls d-flex fjc-space-around fai-center">
      <f-button variant="invisible" @click="handleSaveImage">
        <span class="material-icons icon">check_circle_outline</span>
      </f-button>
      <f-button variant="invisible" @click="handleCloseCropper">
        <span class="material-icons icon">highlight_off</span>
      </f-button> 
    </div>
    <input ref="fileButton" class="hidden" type="file" @change="handleEditImage" />
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper';

export default {
  name: 'RecipeImage',

  components: { Cropper },

  props: {
    image: {
      type: String,
      default: ''
    },
  },

  emits: ['save'],

  data() {
    return {
      newImage: null,
      showCropper: false,
    };
  },

  methods: {
    handleEditImage(event) {
      const { files } = event.target;
      if (!files && !files[0]) {
        return;
      }
      const render = new FileReader();
      render.onload = e => {
        this.newImage = e.target.result;
        this.showCropper = true;
      };
      render.readAsDataURL(files[0]);
    },

    handleCloseCropper() {
      if (this.newImage) {
        URL.revokeObjectURL(this.newImage);
      }
      this.showCropper = false;
    },

    handleSaveImage() {
      const { canvas } = this.$refs.cropper.getResult();
      this.previewSrc = canvas.toDataURL();
      this.showCropper = false;
      canvas.toBlob(blob => {
        this.$emit('save', blob);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
  .image {
    position: relative;
    border-radius: 25px;
    height: 480px;
    min-width: 480px;
    overflow: hidden;

    &:hover {
      .image__curtain {
        opacity: .3;
      }

      .image__edit {
        opacity: 1;
      }
    }

    &__curtain,
    &__edit {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }

    &__curtain {
      background-color: $color-green-3;
    }

    &__edit {
      .edit-icon {
        color: $color-off-white;
        font-size: 80px;
      }
    }

    img {
      width: 480px;
    }

    .cropper {
      height: 420px;

      &__controls {
        background-color: $color-off-white;
        height: 60px;
        padding: 0 160px;

        .icon {
          font-size: 32px;
          color: $color-green-4;
        }
      }
    }
  }
</style>