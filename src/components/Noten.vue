<template>
  <div>
    <Fach title="Mathematik"></Fach>
    <hr />
    <Fach title="Deutsch"></Fach>
    <hr />
    <Fach title="M306"></Fach>
    <hr />
    <Fach title="M307"></Fach>
  </div>
</template>

<script>
import Fach from "./Fach.vue";

export default {
  name: "Noten",
  components: { Fach },
  data() {
    return {
      faecher: ["Mathematik", "M306", "Deutsch"]
    };
  },
  methods: {},
  mounted() {
    let item = localStorage.getItem("noten");
    this.noten = JSON.parse(item);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
