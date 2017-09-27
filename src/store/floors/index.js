import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state () {
    return {
      floors: [],
      tables: [],
      ticket: []
    }
  },
  getters,
  mutations,
  actions
}
