<template>
  <div class="auth-conatainer">
    <img class="logo" src="../assets/etoile-uls.svg" alt="">
    <h1>Login</h1>
    <form action="">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Mot de Passe">
        <button>Connexion</button>
    </form>
  </div>
</template>

<style scoped>

.auth-conatainer{
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  align-items: center;
}

.logo{
  width: 100px;
}

form input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dc3428;
}

form button {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 40px;
  border: 1px solid #dc3428;
  background: #dc3428;
  color: #fff;
  cursor: pointer;
}

form button:hover {
  background: #bd190e;
}

</style>

<script>
export default {
  name: 'ViewAuthentification'
}
</script>