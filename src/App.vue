<template>
  <div id="app" class="d-flex">
      <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
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

html, body {
  height: 100%;
}

</style>