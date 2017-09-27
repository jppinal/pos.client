import { create, update, get, find } from 'src/api/products'

const type = 'groups'
const COMMIT_ONE = 'SET_GROUP'
const COMMIT_ARRAY = 'SET_GROUPS'

export const fetchGroup = function ({ commit }, { id }) {
  return get({
    type,
    body: { id }
  }).then((response) => {
    commit(COMMIT_ONE, { data: response })
  })
}

export const fetchGroups = function ({ commit }) {
  return find({
    type,
    body: {}
  }).then((response) => {
    commit(COMMIT_ARRAY, { data: response })
  })
}

export const saveGroup = function ({ commit }, { properties, options, id }) {
  if (id) {
    return update({
      type,
      body: { properties, options, id }
    }).then((response) => {
      fetchGroups()
    })
  }
  return create({
    type,
    body: { properties, options }
  }).then((response) => {
    fetchGroups()
  })
}
