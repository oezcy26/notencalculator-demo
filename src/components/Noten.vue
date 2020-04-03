<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <Fach title="M306"></Fach>
          <Fach title="M307"></Fach>
        </b-col>
        <b-col>
          <Fach title="Mathematik"></Fach>
          <Fach title="Deutsch"></Fach>
        </b-col>
      </b-row>
    </b-container>
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
