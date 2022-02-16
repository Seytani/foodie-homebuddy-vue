<template>
  <Default>
    <router-view></router-view>
  </Default>
</template>

<script>
import './assets/styles/index.scss'
import Default from "./components/layouts/Default.vue"

export default {
  name: 'App',

  components: { Default },
}
</script>
