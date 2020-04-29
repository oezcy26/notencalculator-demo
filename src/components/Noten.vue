<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <h4>INF-Module</h4>
          <Fach :fach="f" v-for="(f,idx) in faecher" :key="idx"></Fach>
        </b-col>
        <b-col>
          <h4>ÜK-Module</h4>
        </b-col>
        <b-col>
          <h4>Schulfächer</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Fach from "./Fach.vue";
import axios from "axios";

export default {
  name: "Noten",
  components: { Fach },
  data() {
    return {
      faecher: []
    };
  },
  methods: {
    async getFaecher() {
      let resp = await axios.get("/api/faecher");
      let faecher = resp.data;
      this.faecher = faecher;
    }
  },
  mounted() {
    this.getFaecher();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
