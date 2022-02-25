<template>
  <div class="editor">
    <menu-bar />
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar.vue';

export default {
  name: 'Editor',

  components: { EditorContent, MenuBar },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;
      if (isSame) {
        return;
      }
      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [ StarterKit ],
      onUpdate: props => {
        this.$emit('update:modelValue', props.editor.getHTML());
      },
    });
  },
}
</script>

<style lang="scss" scoped>
.editor {
    border: solid 2px $color-green-4;
    border-radius: 8px;

    &:hover {
        border-color: $color-green-2;
    }

    &:focus {
        border-color: $color-green-2;
    }

}

</style>

<style lang="scss">
.ProseMirror {
    height: 100%;
    min-height: 600px;
    outline: none;
    padding: 0 10px;
}
</style>
