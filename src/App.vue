<template>
  <div id="app">
    <nav>
      <router-link class="navlink" to="/">Home</router-link>
      <span class="navlink">|</span>
      <router-link class="navlink" to="/noten">Noten</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
}
nav {
  background-color: aquamarine;
  padding-top: 30px;
  padding-bottom: 30px;
}

.navlink {
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
}
</style>
