import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import { http } from './services/http'
import api from './services/api'
import helpers from './helpers'
import AppComponent from './components/App'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.router = router
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  // nprogress,
  render: h => h(AppComponent),
  created () {
    //
    // Add prototype
    //
    http.init()
    api.init()
    Vue.prototype.$http = http
    Vue.prototype.$api = api
    Vue.prototype.$helpers = helpers
  }
})
