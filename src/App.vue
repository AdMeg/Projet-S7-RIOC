<template>
  <div id="app" class="d-flex">
    <AppSidebar/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: {
    AppSidebar
  }
}
</script>


<style scoped>

html, body {
  height: 100%;
}

.container-fluid {
  overflow: hidden;
}
</style>