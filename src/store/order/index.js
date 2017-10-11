import * as actions from './actions'
import * as mutations from './mutations'

const getters = {}

export default {
  namespaced: true,
  state () {
    return {
      lines: [],
      line: {}
    }
  },
  getters,
  mutations,
  actions
}
