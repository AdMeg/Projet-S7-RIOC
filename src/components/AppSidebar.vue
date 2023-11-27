<template>
  <div class="h-100 d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <router-link class="nav-link active mt-2 bg-danger" to="/"><img src="public\images\logo_ULS_noBG.png" alt=""></router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/actualite">Actualité</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/annuaire">Annuaire</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/catalogue">Catalogue</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/qcm">QCM</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'

}
</script>
