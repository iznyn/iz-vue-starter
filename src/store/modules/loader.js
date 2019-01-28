import * as types from '../mutation-types'

const state = {
  loader: false
}

const mutations = {
  [types.SHOW_LOADER] (state) {
    state.loader = true
  },
  [types.HIDE_LOADER] (state) {
    state.loader = false
  }
}

export default {
  state,
  mutations
}
