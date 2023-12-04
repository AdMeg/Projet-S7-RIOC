<template>
  <div id="app" class="d-flex">
    <AppSplashScreen />
    <router-view></router-view>
  </div>
</template>

<script>

import AppSplashScreen from './components/AppSplashScreen.vue';

export default {
  name: 'App',
  components: {
    AppSplashScreen
  }
}
</script>


<style scoped>
html,
body {
  height: 100%;
}
</style>