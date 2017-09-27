import { create, update, get, find } from 'src/api/products'
import { family } from './data-model'

const type = 'families'
const COMMIT_ONE = 'SET_FAMILY'
const COMMIT_ARRAY = 'SET_FAMILIES'

export const newFamily = function ({ commit }) {
  commit(COMMIT_ONE, { data: family })
}

export const fetchFamily = function ({ commit }, { id }) {
  return get({
    type,
    body: { id }
  }).then((response) => {
    if (!response.options) response.options = []
    commit(COMMIT_ONE, { data: response })
  })
}

export const fetchFamilies = function ({ commit }) {
  return find({
    type,
    body: {}
  }).then((response) => {
    commit(COMMIT_ARRAY, { data: response })
  })
}

export const saveFamily = function ({ commit }, { properties, options, id }) {
  if (id) {
    return update({
      type,
      body: { properties, options, id }
    })
  }
  return create({
    type,
    body: { properties, options }
  })
}
