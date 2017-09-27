import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import { LINE } from './data-model'

export default {
  namespaced: true,
  state () {
    return {
      line: LINE,
      action: 'create',
      overwrite: true
    }
  },
  getters,
  mutations,
  actions
}
