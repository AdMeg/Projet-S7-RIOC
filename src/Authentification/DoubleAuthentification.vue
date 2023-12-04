<template>
    <div class="auth-container">
        <img class="logo" src="../assets/etoile-uls.svg" alt="">

        <div class="title">
            <h1>Authentification à double facteur</h1>
        </div>
        <div class="separator"></div>
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

.logo {
    width: 150px;
    margin-top: -70px;
}

</style>

<script>
export default {
  name: 'DoubleAuthentification',
}
</script>