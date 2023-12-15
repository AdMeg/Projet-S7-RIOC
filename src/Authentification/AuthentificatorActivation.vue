<template>
    <div class="auth-container">
      <img class="logo" src="../assets/etoile-uls.svg" alt="">
      <div class="title">
        <h1>Google Authentificator</h1>
      </div>
      <div class="separator"></div>
      <p>L'activation de Google Authentificator est obligatoire. Merci de scanner ce QR code depuis l'application sur votre mobile.</p>
      <img :src="qrCodeImageUrl" alt="">
      <button id="nextButton" class="btn btn-danger mt-3" @click="redirectToNextPage">Suivant</button>
    </div>
  </template>
  
  <script>
export default {
  name: 'AuthentificatorActivation',
  data() {
    return {
      qrCodeImageUrl: '',
      uid: '',
    };
  },
  mounted() {
    const urlFromRoute = this.$route.query.url || '';
    const uid = this.$route.query.uid || '';
    this.qrCodeImageUrl = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${urlFromRoute}`;
    this.uid = uid;
  },
  methods: {
    redirectToNextPage() {
      // Effectuer la redirection avec l'uid
      this.$router.push({
        path: '/double-authentification', 
        query: { uid: this.uid },
        replace: true,
      });
    },
  },
};
</script>
  
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
  
  .logo {
    width: 150px;
    margin-top: -70px;
  }

  p{
    margin-top: 0.5rem;
    margin-left: 10px;
    color: rgba(190, 190, 190, 0.7);
    font-style: italic;
  }

  button{
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  </style>