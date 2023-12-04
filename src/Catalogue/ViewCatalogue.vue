<template>
  <AppSidebar/>
  <div class=" main container-fluid">
    <div class="title mt-5">
      <h1>Catalogue</h1>
    </div>
    <div class="content rounded scroll">
      <div class="mt-5 mb-3">
        <div class="row">
          <div class="col-sm-3" v-for="element in elements" :key="element.id">
            <div class="card p-3 mb-4">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon fs-2"> <i :class="['fa-'+ element.icon[0], 'fa-' + element.icon[1]]"></i> </div>
                </div>
                <div class="badge">
                  <span :class="['badge', element.estActif ? 'bg-success' : 'bg-danger']">{{ element.estActif ? 'ON' :
                    'OFF' }}</span>
                </div>
              </div>
                <h3 class="heading">{{ element.nom }}</h3>
                <div v-for="composant in element.composents" :key="composant.CPU">

                  <div class="mt-5">
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">{{ composant.CPU }}</h6>
                    </div>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" :class="getProgressBarClass(composant.CPU_rate)" :style="{ width: composant.CPU_rate + '%' }" :aria-valuenow="composant.CPU_rate"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1">{{ composant.CPU_rate }}% d'utilisation</span>
                    </div>
                  </div>

                  <div class="mt-3">
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">{{ composant.Disk }}</h6>
                    </div>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" :class="getProgressBarClass(composant.Disk_rate)" :style="{ width: composant.Disk_rate + '%' }" :aria-valuenow="composant.Disk_rate"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1">{{ composant.Disk_rate }}% d'utilisation</span>
                    </div>
                  </div>

                  <div class="mt-3">
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">{{ composant.RAM }}</h6>
                    </div>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" :class="getProgressBarClass(composant.RAM_rate)" :style="{ width: composant.RAM_rate + '%' }" :aria-valuenow="composant.RAM_rate"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1">{{ composant.RAM_rate }}% d'utilisation</span>
                    </div>
                  </div>

                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from '../components/AppSidebar.vue'

export default {
  name: 'ViewCatalogue',
  components: {
    AppSidebar
  },
  data() {
    return {
      elements: [
        { id: 1, nom: 'Base de donnée', estActif: true, icon: ['solid','database'], composents: [{ CPU: 'Processeur', CPU_rate: 50, Disk: 'Espace Disque', Disk_rate: 33, RAM: 'Mémoire Vive', RAM_rate: 67 }] },
        { id: 2, nom: 'Docker QCM', estActif: false, icon: ['brands','docker'], composents: [{ CPU: 'Processeur', CPU_rate: 50, Disk: 'Espace Disque', Disk_rate: 98, RAM: 'Mémoire Vive', RAM_rate: 67 }] },
        { id: 2, nom: 'Docker Actualité', estActif: false, icon: ['brands','docker'], composents: [{ CPU: 'Processeur', CPU_rate: 50, Disk: 'Espace Disque', Disk_rate: 33, RAM: 'Mémoire Vive', RAM_rate: 67 }] },
        { id: 2, nom: 'Docker Applications', estActif: true, icon: ['brands','docker'], composents: [{ CPU: 'Processeur', CPU_rate: 50, Disk: 'Espace Disque', Disk_rate: 33, RAM: 'Mémoire Vive', RAM_rate: 67 }] },
        { id: 3, nom: 'Element 2', estActif: false, icon: ['solid','database'], composents: [{ CPU: 'Processeur', CPU_rate: 50, Disk: 'Espace Disque', Disk_rate: 33, RAM: 'Mémoire Vive', RAM_rate: 67 }] },
      ]
    }
  },
  methods: {
  getProgressBarClass(rate) {
    if (rate <= 50) {
      return 'progress-bar-green';
    } else if (rate <= 75) {
      return 'progress-bar-orange';
    } else {
      return 'progress-bar-red';
    }
  }
}


}
</script>

<style scoped>
.title {
  margin-left: 50px;
}

.content {
  padding: 0px 50px !important;
}

.scroll {
  height: 900px;
  overflow: auto;
  text-align: justify;
  padding: 20px;
}

.progress-bar-green {
  background-color: green;
}

.progress-bar-orange {
  background-color: orange;
}

.progress-bar-red {
  background-color: red;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 50px rgba(103, 103, 103, 0.221)
}

.c-details span {
  font-weight: 300;
  font-size: 13px
}

.badge span {
  display: flex;
  padding: 5px 10px;
  font-size: 12px;
  opacity: 0.6;
  justify-content: center;
  align-items: center
}

.progress {
  height: 10px;
  border-radius: 10px
}

</style>

