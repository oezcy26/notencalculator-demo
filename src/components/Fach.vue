<template>
  <b-card no-body>
    <b-card-header>
      <b-button variant="primary" block v-b-toggle="fach.id.toString()">{{fach.name}}</b-button>
    </b-card-header>
    <b-collapse :id="fach.id.toString()">
      <b-card-body>
        <ul>
          <li v-for="(n,idx) in fach.noten" v-bind:key="idx">{{n.name}} : {{n.wert}}</li>
        </ul>
        <label>Neue Note:</label>
        <b-input-group>
          <b-form-input v-model="neueNote.name" type="text" placeholder="Titel"></b-form-input>
          <b-form-input v-model="neueNote.wert" type="number" step="0.1" placeholder="Wert"></b-form-input>
          <b-button @click="addNote()">Ok</b-button>
        </b-input-group>
        <p>
          <b>&#8709; {{calcAvg() | round(1)}}</b>
        </p>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: "Fach",
  props: {
    fach: Object
  },
  data() {
    return {
      noten: [],
      neueNote: {},
      avg: 0
    };
  },
  methods: {
    addNote: function() {
      if (!this.fach.noten) {
        this.fach.noten = [];
      }
      this.fach.noten.push(this.neueNote);
      this.neueNote = {};
    },
    calcAvg: function() {
      let sum = 0;
      if (this.fach.noten) {
        this.fach.noten.forEach(element => {
          console.log;
          sum = sum + parseFloat(element.wert);
        });
        console.log("sum" + sum);

        return sum / this.fach.noten.length;
      } else {
        return 0;
      }
    }
  },
  filters: {
    round(value, pos) {
      return value.toFixed(pos);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
