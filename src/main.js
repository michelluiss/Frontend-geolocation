import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueBus from 'vue-bus'

// Vue.use(VueAxios, axios)

Vue.use(VueBus)

Vue.use(VueResource)
Vue.http.options.root = 'http://ip-api.com/json/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
