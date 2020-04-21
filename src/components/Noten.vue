<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <span>INF-Module</span>
          <Fach title="M306"></Fach>
          <Fach title="M307"></Fach>
        </b-col>
        <b-col>
          <span>ÜK-Module</span>
          <Fach title="M417"></Fach>
          <Fach title="M404"></Fach>test-änderung
        </b-col>
        <b-col>
          <span>Schulfächer</span>
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
<style scoped></style>
