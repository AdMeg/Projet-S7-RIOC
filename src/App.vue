<template>
  <div id="app" class="d-flex">
    <AppSplashScreen />
    <router-view></router-view>
  </div>
</template>

<script>

import AppSplashScreen from './components/AppSplashScreen.vue';
import axios from "axios";

export default {
  name: 'App',
  components: {
    AppSplashScreen
  },
  data() {
    return {
      answer: {},
    };
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("https://yesno.wtf/api");
      this.answer = data;
    },
  },
  beforeMount() {
    this.getAnswer();
  },
};
</script>


<style scoped>
html,
body {
  height: 100%;
}
</style>