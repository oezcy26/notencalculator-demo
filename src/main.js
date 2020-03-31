import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


//import here the components which are used for routing


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
