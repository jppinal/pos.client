import * as actions from './actions'
import * as mutations from './mutations'

const getters = {}

export default {
  namespaced: true,
  state () {
    return {
      family: {},
      productOptions: []
    }
  },
  getters,
  mutations,
  actions
}
