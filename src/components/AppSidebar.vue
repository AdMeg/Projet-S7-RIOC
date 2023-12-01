
<template>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  </head>
  <div class=" vh-100 d-flex flex-column flex-shrink-0 p-3 sidebar" :class="{ 'expanded': isSidebarExpanded }"
    @mouseenter="isSidebarExpanded = true" @mouseleave="isSidebarExpanded = false">
    <div style="width: 280px;">

      <header class="my-5">
        <router-link to="/actualite">
          <img src="images\logo_ULS_noBG.png" class="sidebar-logo img-fluid my-2 mx-3 w-75" alt="Responsive image">
            <img src="images\star_noBG.png" class="sidebar-star img-fluid my-2 w-25 " alt="Responsive image">
        </router-link>
      </header>

      <main class="flex-grow-1 text-uppercase">
        <ul class="nav nav-pills flex-column mb-auto">
          <div class="el d-flex my-3">
            <div class="left " style="width: 80px;">
              <i class=" fa-solid fa-book fs-2 mt-2 mx-3 text-muted"></i>
            </div>
            <router-link id="annuaire" class=" sideBar_label mt-2 mx-3 text-decoration-none text-dark fs-5"
              to="/annuaire">Applications</router-link>
          </div>
          <div class="el d-flex my-3">
            <div class="left " style="width: 80px;">
              <i class="fa-solid fa-book-open fs-2 mt-2 mx-3 text-muted"></i>
            </div>
            <router-link id="catalogue" class=" sideBar_label mt-2 mx-3 text-decoration-none text-dark fs-5"
              to="/catalogue">Catalogue</router-link>
          </div>
          <div class="el d-flex my-3">
            <div class="left " style="width: 80px;">
              <i class="fa-solid fa-list-check fs-2 mt-2 mx-3 text-muted"></i>
            </div>
            <router-link id="qcm" class=" sideBar_label mt-2 mx-3 text-decoration-none text-dark fs-5" to="/qcm">E-Learning</router-link>
          </div>

        </ul>
      </main>
    </div>

    <footer class="mt-auto mx-auto mb-3 text-uppercase" style="width: max-content;">

      <router-link class=" btn btn-danger mx-auto fw-bold " to="/logout">Se déconnecter</router-link>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: false
    };
  },
  name: 'SideBar'

}
</script>


<style scoped>
.sidebar {
  width: 100px;
  background-color: rgb(241, 242, 242);
  transition: width 0.3s;
}

.sidebar-star{
  opacity: 1;
  transition: 0.3s;
}

.sidebar.expanded {
  width: 300px;
  background-color: rgb(234, 234, 234);

  box-shadow: 20px 0 35px -5px rgba(72, 72, 72, 0.5);

}
.sidebar.expanded .sidebar-star {
  opacity: 0;
  transition: 0.3s;
}

footer {
  opacity: 0;
  transition: 0.3s;
}

.sidebar.expanded footer {
  opacity: 1;
  transition: 0.3s;
}


.sidebar.expanded #annuaire,.sidebar.expanded #qcm,.sidebar.expanded #catalogue  {
  opacity: 1;
  transition: 0.3s;
}
#annuaire ,#qcm, #catalogue {
  opacity :0;
  transition: 0.3s;
}

.sideBar_label{
  transition: 0.3s;
}
.sideBar_label:hover{
  color:red !important;
  transition: 0.3s;
}

.sidebar-logo {
  opacity: 0;
  
  transition: 0.3s;
}

.sidebar.expanded .sidebar-logo {
  opacity: 1;
  transition: 0.5s;
}

</style>
