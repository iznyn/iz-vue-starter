import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
  },
  state: {},
  mutations: {
  }
})

export default store
