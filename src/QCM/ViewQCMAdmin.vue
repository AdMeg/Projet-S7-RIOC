<template>
  <AppSidebar />
  <div class=" main container-fluid ">
    <div class="title mt-5">
      <h1>E-learning - Administration</h1>
    </div>
    <button @click="ouvrirModal" class="position-absolute end-0 btn btn-primary bg-danger mx-3 border-0 ">Ajouter un quiz</button>
    <div class="content rounded bg-light my-5 p-0 scroll">

      <table id="myDataTable" class="table w-100">
        <thead>
          <tr>
            <th>Theme</th>
            <th>Nom</th>
            <th>Date d'ouverture</th>
            <th>Date de fermeture</th>
            <th>Nombre de réponse</th>
            <th>Voir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scolarité</td>
            <td>20/20 pour le groupe orchestre au projet svp </td>
            <td>15/12/2023</td>
            <td>16/12/2023</td>
            <td>0/70 (0%)</td>
            <td>
              <a href="">
                <i class="fa-solid fa-pen-to-square fs-2 text-danger"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>Administration</td>
            <td>Baissez le prix des cafés svp</td>
            <td>01/12/2023</td>
            <td>02/12/2023</td>
            <td>70/70 (100%)</td>
            <td>
              <a href="">
                <i class="fa-solid fa-pen-to-square fs-2 text-danger"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>Test </td>
            <td>Test ?</td>
            <td>14/12/2023</td>
            <td>15/12/2023</td>
            <td>3/70 (5%)</td>
            <td>
              <a href="">
                <i class="fa-solid fa-pen-to-square fs-2 text-danger"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>Crous</td>
            <td>le menu de la cantine est-il dégueulasse ?</td>
            <td>07/12/2023</td>
            <td>08/12/2023</td>
            <td>34/70 (49%)</td>
            <td>
              <a href="">
                <i class="fa-solid fa-pen-to-square fs-2 text-danger"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="modal fade" id="maModal" tabindex="-1" role="dialog" aria-labelledby="maModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="maModalLabel">Ma Modal</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Contenu de la modal...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="button" class="btn btn-primary">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppSidebar from '../components/AppSidebar.vue'

// import Swal from 'sweetalert2';

export default {
  name: 'ViewQCM',
  components: {
    AppSidebar
  },
  methods: {
    getAllQuiz() {
      const baseUrl = 'http://10.114.236.239:3000/';
      axios({
        method: 'post',
        url: baseUrl,
        data: {

        },
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          // Traitement de la réponse
          console.log('ahaha', response);
        })
        .catch(error => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête POST', error);
        });
    },
    ouvrirModal() {
      document.getElementById('maModal').modal('show');
    }
  },
  mounted() {
    // Appel de la méthode au montage du composant, si souhaité
    this.getAllQuiz();
    //     this.$nextTick(() => {
    //       $('#myDataTable').DataTable({
    //           paging: true,
    //           searching: true,
    //           ordering: true,
    //           // Ajoutez d'autres options ici
    //     });
    // });

  }
};
</script>

<style scoped>
.title {
  margin-left: 50px;
}

.content {
  margin-left: 50px;
  box-shadow: 0px 0px 50px rgba(103, 103, 103, 0.221)
}

.scroll {
  height: 900px;
  overflow: auto;
  text-align: justify;
  padding: 20px;
}


table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 15px;
}

th {
  text-align: left;
  color: #fff;

}

thead {
  th {
    background-color: rgb(220, 52, 40);

  }
}

tbody {
  tr {
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  td {
    position: relative;

    &:hover {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: -1;
      }
    }
  }
}
</style>

