<template>
  <div class="default d-flex">
    <navbar>
      <slot />
    </navbar>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue"

export default {
  name: 'DefaultLayout',

  components: { Navbar }
}
</script>

<style lang="scss" scoped>
.default {
  min-height: 100vh;
}

main {
  width: 100%;
}
</style>
