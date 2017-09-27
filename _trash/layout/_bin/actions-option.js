import { create, update, get, find } from 'src/api/products'

const type = 'options'
const COMMIT_ONE = 'SET_OPTION'
const COMMIT_ARRAY = 'SET_OPTIONS'

export const fetchOption = function ({ commit }, { id }) {
  return get({
    type,
    body: { id }
  }).then((response) => {
    commit(COMMIT_ONE, { data: response })
  })
}

export const fetchOptions = function ({ commit }) {
  return find({
    type,
    body: {}
  }).then((response) => {
    commit(COMMIT_ARRAY, { data: response })
  })
}

export const saveOption = function ({ commit }, { properties, id }) {
  if (id) {
    return update({
      type,
      body: { properties, id }
    }).then((response) => {
      fetchOptions()
    })
  }
  return create({
    type,
    body: { properties }
  }).then((response) => {
    fetchOptions()
  })
}
