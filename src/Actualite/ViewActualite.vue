<template>
  <AppSidebar/>
  <div class=" main container-fluid">
    <div class="title mt-5">
      <h1>Actualité</h1>
    </div>
    <div class="content rounded bg-light my-5 p-3 scroll">
      <ActuCard/>
      <ActuCard/>
    </div>
  </div>
</template>

<script>
import AppSidebar from '../components/AppSidebar.vue'
import ActuCard from '../Actualite/ActuCard.vue'
export default {
  name: 'ViewActualite',
  components: {
    AppSidebar,
    ActuCard,
    }
}
</script>



<style scoped>

.title  {
  margin-left: 50px;
}
.content{
  margin-left: 50px;
  box-shadow: 0px 0px 50px rgba(103, 103, 103, 0.221)
}

.scroll {
        height: 900px;
        overflow: auto;
        text-align: justify;
        padding: 20px;
      }
</style>

