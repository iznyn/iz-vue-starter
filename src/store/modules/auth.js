import * as types from '../mutation-types'

const state = {
  auth: false
}

const mutations = {
  [types.SET_AUTH] (state, auth) {
    state.auth = auth
  },
  [types.REMOVE_AUTH] (state) {
    state.auth = null
  }
}

export default {
  state,
  mutations
}
