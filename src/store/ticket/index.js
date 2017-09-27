import * as actions from './actions'
import * as mutations from './mutations'

const getters = {}

export default {
  namespaced: true,
  state () {
    return {
      lines: [],
      index: 0,
      total: { value: 0, currency: 'EUR' }
    }
  },
  getters,
  mutations,
  actions
}
