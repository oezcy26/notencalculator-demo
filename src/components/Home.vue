<template>
  <div>
    <h1>Das ist meine Homeseite</h1>

    <p>Mein Name ist {{name}}</p>

    <p>Sie ist noch etwas langweilig. Aber es geht nur darum, dass wir das Routing mit Vue.js üben.</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    name: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
