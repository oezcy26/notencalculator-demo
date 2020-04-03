<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" style="font-size:20px;">
      <b-navbar-nav>
        <b-nav-item v-bind:class="{active: getRoute() == 'Home'}" href="#/">Home</b-nav-item>

        <b-nav-item v-bind:class="{active: getRoute() == 'Noten'}" href="#/noten">Noten</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
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
  },
  methods: {
    getRoute() {
      return this.$route.name;
    }
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
