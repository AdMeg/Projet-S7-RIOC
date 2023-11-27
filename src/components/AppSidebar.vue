<template>
  <div class="h-100 d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <router-link class="nav-link active mt-2 bg-danger" to="/">Accueil</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/profile">Profil</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/messages">messages</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/settings">settings</router-link>
      <router-link class="nav-link active mt-2 bg-danger" to="/help">help</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'

}
</script>
