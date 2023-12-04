<template>
  <div v-if="visible" class="splash-screen">
    <img src="@/assets/splashScreenULS.gif" alt="Chargement...">
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
    }, 4000); // Changez 4000 par la durée souhaitée en millisecondes
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
