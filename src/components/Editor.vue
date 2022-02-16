<template>
  <editor-content editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit';

export default {
  name: 'Editor',

  components: { EditorContent },

  data() {
    return {
      editro: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>editor content</p>'
      extensions: [

      ]
    });
  },
}
</script>
