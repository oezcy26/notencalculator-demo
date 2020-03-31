<template>
  <div>
    <h2>Noten-Calculator</h2>
    <div id="app">
      <ul>
        <li v-for="(n,idx) in noten" v-bind:key="idx">{{idx+1}}. Note : {{n}}</li>
      </ul>
      <div>
        <label>Neue Note:</label>
        <input type="text" v-model="neueNote" />
        <button @click="addNote()">Ok</button>
      </div>
      <br />
      <br />
      <br />
      <div>Mein Notendurchschnitt: {{calcAvg()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Noten",
  props: {},
  data() {
    return {
      noten: [],
      neueNote: 0,
      avg: 0
    };
  },
  methods: {
    addNote: function() {
      if (!this.noten) {
        this.noten = [];
      }
      this.noten.push(this.neueNote);
      localStorage.noten = JSON.stringify(this.noten);
      this.neueNote = 0;
    },
    calcAvg: function() {
      let sum = 0;
      //iteriere über alle Noten und zähle zusammen
      for (var i = 0; i < this.noten.length; i++) {
        let zahl = parseInt(this.noten[i]);
        sum = sum + zahl;
      }
      //berechne durchschnitt und gebe aus
      console.log(sum);
      console.log(this.noten.length);
      return sum / this.noten.length;
    }
  },
  mounted() {
    this.noten = JSON.parse(localStorage.noten);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
