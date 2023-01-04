<template>
  <br><br><br>
  <h1>Bienvenue <br> dans le jeu du morpion</h1>
  <br><br><br>
  <div>
    <button type="button" class="btn btn-success btn-lg" v-on:click="this.$router.push('/grille')">Jouer une Partie</button>
    <br><br>
    <button type="button" class="btn btn-success btn-lg" v-on:click="this.$router.push('/regle')">Règle du Jeu</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn-success {
  width: 200px;
}
</style>
