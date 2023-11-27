<template>
  <div id="app" class="auth-container">
    <form class="login" action="">
      <div class="form-header">
        <h1>Login</h1>
      </div>
      <div class="form-content">
        <h3>Email</h3>
        <input type="email" placeholder="Enter your email">
        <h3>Password</h3>
        <input type="password" placeholder="Enter your password">
        <button class="form-validation" type="submit">Connexion</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.auth-container{
  background: #dc3428;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  width: 30%;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
}

.form-content{
  margin-left: 10%;
  display: flex;
  flex-direction: column;
}

.form-validation{
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 90%;
  border-radius: 30px;
  background: #de4237;
  color:white;
  border: none;
}

.form-validation:hover{
  background: #dc3428;
}
.form-header {
  display: flex;
  justify-content: center;
}

input{
  background: transparent;
  align-items: center;
  width: 90%;
  border: none;
}
</style>

<script>
export default {
  name: 'ViewAuthentification'
  // Options du composant
}
</script>
