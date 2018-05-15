import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as config from './config.js'

axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT
Vue.use(VueAxios, axios)

import VueAnalytics from 'vue-ua'

Vue.use(VueAnalytics, {
  appName: 'enricbg-personal',
  appVersion: '1.0',
  trackingId: config.GA
})
new Vue({
  render: h => h(App)
}).$mount('#app')
