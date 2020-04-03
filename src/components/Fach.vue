<template>
  <b-card no-body>
    <b-card-header>
      <b-button variant="primary" block v-b-toggle="title">{{title}}</b-button>
    </b-card-header>
    <b-collapse :id="title">
      <b-card-body>
        <ul>
          <li v-for="(n,idx) in noten" v-bind:key="idx">{{idx+1}}. Note : {{n}}</li>
        </ul>
        <label>Neue Note:</label>
        <input type="number" v-model="neueNote" />
        <button @click="addNote()">Ok</button>
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
    title: String
  },
  data() {
    return {
      noten: [],
      neueNote: null,
      avg: 0
    };
  },
  methods: {
    addNote: function() {
      if (!this.noten) {
        this.noten = [];
      }
      this.noten.push(this.neueNote);
      this.neueNote = null;

      //Abspeichern der Noten im LocalStorage des Browsers
      localStorage.setItem(this.title, JSON.stringify(this.noten));
    },
    calcAvg: function() {
      let sum = 0;

      this.noten.forEach(element => {
        sum = sum + parseFloat(element);
      });

      return sum / this.noten.length;
    }
  },
  filters: {
    round(value, pos) {
      return value.toFixed(pos);
    }
  },
  mounted() {
    let item = localStorage.getItem(this.title);
    this.noten = JSON.parse(item);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
