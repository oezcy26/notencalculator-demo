<template>
  <div id="app">
    <nav>
      <a href="#/html/">Home</a> |
      <a href="#/css/">Noten</a> |
    </nav>
    <Home name="Özcan Altin" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      meineVariable: "xxxXXXxxxXXXxxx"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
