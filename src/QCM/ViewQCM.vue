<template>
  <AppSidebar />

  <div class=" main container-fluid ">
    <div class="title mt-5">
      <h1>E-learning</h1>
    </div>
    <div class="content rounded bg-light my-5 p-0 scroll">
      <table id="myDataTable" class="table">
        <thead>
          <tr>
            <th>Thème</th>
            <th>Nom</th>
            <th>Date d'ouverture</th>
            <th>Date de Fermeture</th>
            <th>Statut</th>
            <th>Voir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quiz, index) in allQuiz" :key="index">
            <td>{{ quiz.theme }}</td>
            <td>{{ quiz.nom }}</td>
            <td>{{ quiz.dateOuverture }}</td>
            <td>{{ quiz.dateFermeture }}</td>
            <td>{{ quiz.statut }}</td>
            <td>
              <a href="">
                <i class="fa-solid fa-pen-to-square fs-2"
                  :class="{ 'text-danger': quiz.statut == 'A FAIRE', 'text-success': quiz.statut != 'A FAIRE' }"
                  :data-statut-value="quiz.statut == 'A FAIRE' ? 1 : 0"></i>
              </a>
            </td>


          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from "jquery";
import "datatables.net";

import AppSidebar from '../components/AppSidebar.vue'


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
  },
  data() {
    return {
      allQuiz: [
        {
          theme: "Crous",
          nom: "le menu de la cantine est-il dégueulasse ?",
          dateOuverture: "07/12/2023",
          dateFermeture: "08/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Scolarité",
          nom: "20/20 pour le groupe orchestre au projet svp",
          dateOuverture: "15/12/2023",
          dateFermeture: "16/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Administration",
          nom: "Baissez le prix des cafés svp",
          dateOuverture: "01/12/2023",
          dateFermeture: "02/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Test",
          nom: "Test ?",
          dateOuverture: "14/12/2023",
          dateFermeture: "15/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Sport",
          nom: "Organisation d'un tournoi de football",
          dateOuverture: "10/12/2023",
          dateFermeture: "12/12/2023",
          statut: "A FAIRE",
        }, {
          theme: "Crous",
          nom: "le menu de la cantine est-il dégueulasse ?",
          dateOuverture: "07/12/2023",
          dateFermeture: "08/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Scolarité",
          nom: "20/20 pour le groupe orchestre au projet svp",
          dateOuverture: "15/12/2023",
          dateFermeture: "16/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Administration",
          nom: "Baissez le prix des cafés svp",
          dateOuverture: "01/12/2023",
          dateFermeture: "02/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Test",
          nom: "Test ?",
          dateOuverture: "14/12/2023",
          dateFermeture: "15/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Sport",
          nom: "Organisation d'un tournoi de football",
          dateOuverture: "10/12/2023",
          dateFermeture: "12/12/2023",
          statut: "A FAIRE",
        }, {
          theme: "Crous",
          nom: "le menu de la cantine est-il dégueulasse ?",
          dateOuverture: "07/12/2023",
          dateFermeture: "08/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Scolarité",
          nom: "20/20 pour le groupe orchestre au projet svp",
          dateOuverture: "15/12/2023",
          dateFermeture: "16/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Administration",
          nom: "Baissez le prix des cafés svp",
          dateOuverture: "01/12/2023",
          dateFermeture: "02/12/2023",
          statut: "FAIT",
        },
        {
          theme: "Test",
          nom: "Test ?",
          dateOuverture: "14/12/2023",
          dateFermeture: "15/12/2023",
          statut: "A FAIRE",
        },
        {
          theme: "Sport",
          nom: "Organisation d'un tournoi de football",
          dateOuverture: "10/12/2023",
          dateFermeture: "12/12/2023",
          statut: "A FAIRE",
        }
      ],
    };
  },
  mounted() {
    $(document).ready(function () {
      $("#myDataTable").DataTable({
        language: {
          search: "Rechercher ",
          lengthMenu: "Afficher _MENU_ ",
          info: "Affichage de _START_ à _END_ sur _TOTAL_ Quiz",
          paginate: {
            previous: "Précédent",
            next: "Suivant",
          },
        },
      }
      );
      
    });
  },
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

table.dataTable thead th {
  cursor: pointer;
}
</style>

