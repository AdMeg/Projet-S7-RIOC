<template>
    <div class="auth-container">
        <img class="logo" src="../assets/etoile-uls.svg" alt="">

        <div class="title">
            <h1>Authentification à double facteur</h1>
        </div>
        <div class="separator"></div>
        <form @submit.prevent="postData">
            <label class="mt-5" for="email">
                <h5>
                    Code Authentificator:
                </h5>
            </label>
            <input type="text" id="uid">
            <button id="submitButton" class="btn btn-danger w-100 mt-3">Connexion</button>
        </form>
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

.title h1 {
    font-size: 27px;
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
export default {
    name: 'DoubleAuthentification',
}
</script>