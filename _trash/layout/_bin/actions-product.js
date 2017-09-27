import { create, update, get, find } from 'src/api/products'

const type = 'products'
const COMMIT_ONE = 'SET_PRODUCT'
const COMMIT_ARRAY = 'SET_PRODUCTS'

export const fetchProduct = function ({ commit }, { id }) {
  return get({
    type,
    body: { id }
  }).then((response) => {
    commit(COMMIT_ONE, { data: response })
  })
}

export const fetchProducts = function ({ commit }) {
  return find({
    type,
    body: {}
  }).then((response) => {
    commit(COMMIT_ARRAY, { data: response })
  })
}

export const saveProduct = function ({ commit }, { properties, options, group, id }) {
  if (id) {
    return update({
      type,
      body: { properties, options, group, id }
    }).then((response) => {
      fetchProducts()
    })
  }
  return create({
    type,
    body: { properties, options, group }
  }).then((response) => {
    fetchProducts()
  })
}
