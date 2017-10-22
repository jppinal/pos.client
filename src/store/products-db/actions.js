import { get, find, create, update, remove } from 'src/api/products'

const COMMIT = []
COMMIT['collections'] = 'SET_COLLECTIONS'
COMMIT['families'] = 'SET_FAMILIES'
COMMIT['groups'] = 'SET_GROUPS'
COMMIT['options'] = 'SET_OPTIONS'
COMMIT['products'] = 'SET_PRODUCTS'

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

export const fetch = function ({ commit }, { type, body }) {
  if (!body) body = {}
  return find({
    type,
    body
  }).then((response) => {
    let data = []
    return _get(data, response, type, (data) => {
      commit(COMMIT[type], { data })
    })
  })
}

export const setFamily = function ({ commit }, { family }) {
  commit('SET_FAMILY', { data: family })
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
