<template>
  <div class="auth-container">
    <img class="logo" src="../assets/etoile-uls.svg" alt="">

    <div class="title">
      <h1>Se connecter</h1>
    </div>
    <div class="separator"></div>
    <form @submit.prevent="postData">

      <label class="mt-5" for="email">
        <h5>
          Identifiant
        </h5>
      </label>
      <input type="text" id="uid" v-model="formData.uid">
      <label class="mt-2" for="email">
        <h5>
          Mot de passe
        </h5>
      </label>
      <input type="password" id="mdp" v-model="formData.mdp">

      <button id="submitButton" class="btn btn-danger w-100 mt-3">Connexion</button>
      <!-- "uid": "albert_aynes","mdp": "tutu" -->
    </form>

    <!-- Affichage de la réponse ou de l'erreur -->
    <div v-if="response">
      <h3>Réponse :</h3>
      <pre>{{ response }}</pre>
    </div>
    <div v-if="error">
      <h3>Erreur :</h3>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  width: 30%;
  min-width: 450px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  border-radius: 20px;
  align-items: center;
  border: 1px solid black;
  padding: 5px 0px 50px;
  box-shadow: 0px 0px 50px rgba(190, 190, 190, 0.7);
}

.separator {
  width: 25%;
  margin-top: 15px;
  border-bottom: 2px solid red;
}

form {
  width: 90%
}

.logo {
  width: 150px;
  margin-top: -70px;
}

form input {
  width: 95%;
  height: 40px;
  display: block;
  margin-bottom: 30px;
  margin: 10px auto 25px;
  border-radius: 5px;
  border: 1px solid #dc3428;
  transition: 0.3s
}

form input:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
  transition: 0.3s
}

form input:focus {
  width: 100%;
  height: 45px;
  box-shadow: 0px 0px 20px rgba(75, 75, 75, 0.42);
  transition: 0.3s
}


form button {
  height: 50px;
}
</style>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        uid: '',
        mdp: '',
      },
      response: null,
      error: null,
    };
  },
  methods: {
    postData() {
      // URL de l'API
      const apiUrl = 'http://10.19.2.3:8000/Connexion';

      // Effectuer la requête POST
      axios.post(apiUrl, this.formData)
        .then(response => {
          // Vérifier si la réponse contient le message d'erreur spécifique
          if (Array.isArray(response.data) && response.data.includes('Login ou mot de passe incorrect')) {
            // Afficher une alerte d'erreur
            Swal.fire({
              icon: 'error',
              title: 'Erreur d\'authentification',
              text: 'Login ou mot de passe incorrect.',
            });
          } else {
            console.log(response.data)
            if (response.data.includes("Connexion ok -> double auth")) {
              // Afficher une alerte de succès
              this.$router.push({ path: '/double-authentification', query: { uid: this.formData.uid }, replace: true })
            } else {
              this.$router.push({ path: '/authentificator-activation', query: { uid: this.formData.uid, url: response.data }, replace: true })
            }
          }
          this.response = response.data;
          this.error = null;
        })
        .catch(error => {
          // Afficher une alerte d'erreur générale en cas d'autres erreurs
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: error.message || 'Une erreur s\'est produite.',
          });

          // Gérer l'erreur
          this.response = null;
          this.error = error.message || 'Une erreur s\'est produite.';
        });
    },
  },
};
</script>

