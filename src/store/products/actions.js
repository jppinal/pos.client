import { find } from 'src/api/local'

const COMMIT = []
COMMIT['collections'] = 'SET_COLLECTIONS'
COMMIT['families'] = 'SET_FAMILIES'
COMMIT['groups'] = 'SET_GROUPS'
COMMIT['products'] = 'SET_PRODUCTS'

export const fetch = function ({ commit }, { type, collection, family, group }) {
  return find({
    type,
    collection,
    family,
    group
  }).then((response) => {
    commit(COMMIT[type], { type, data: response })
  })
}

export const setFamily = function ({ commit }, { family }) {
  commit('SET_FAMILY', { data: family })
}
