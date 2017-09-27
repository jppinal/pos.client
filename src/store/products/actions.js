import { create, update, remove, get, find } from 'src/api/products'

const COMMIT_ONE = []
const COMMIT_ARRAY = []
COMMIT_ONE['collections'] = 'SET_COLLECTION'
COMMIT_ONE['families'] = 'SET_FAMILY'
COMMIT_ONE['groups'] = 'SET_GROUP'
COMMIT_ONE['options'] = 'SET_OPTION'
COMMIT_ONE['products'] = 'SET_PRODUCT'
COMMIT_ARRAY['collections'] = 'SET_COLLECTIONS'
COMMIT_ARRAY['families'] = 'SET_FAMILIES'
COMMIT_ARRAY['groups'] = 'SET_GROUPS'
COMMIT_ARRAY['options'] = 'SET_OPTIONS'
COMMIT_ARRAY['products'] = 'SET_PRODUCTS'

export const fetchOne = function ({ commit }, { id, type }) {
  return get({
    type,
    body: { id }
  }).then((response) => {
    commit(COMMIT_ONE[type], { data: response })
  })
}

const _get = (data, array, type, cb) => {
  if (array.length < 1) {
    return cb(data)
  }
  get({
    type,
    body: array.pop()
  }).then((response) => {
    data.push(response)
    _get(data, array, type, cb)
  })
}

export const fetchArray = function ({ commit }, { array, type }) {
  let data = []
  return _get(data, array, type, (data) => {
    commit(COMMIT_ARRAY[type], { data })
  })
}

export const fetch = function ({ commit }, { type, body }) {
  if (!body) body = {}
  return find({
    type,
    body
  }).then((response) => {
    commit(COMMIT_ARRAY[type], { data: response })
  })
}

export const save = function ({ commit }, { body, type }) {
  if (body.id) {
    return update({
      type,
      body
    })
  }
  return create({
    type,
    body
  })
}

export const deleteOne = function ({ commit }, { id, type }) {
  return remove({
    type,
    body: { id }
  })
}
