import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.prototype.$http = Axios;


Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.withCredentials = true
Axios.defaults.crossDomain = true


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
