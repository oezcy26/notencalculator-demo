import Vue from 'vue'
import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//import here the components which are used for routing


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
