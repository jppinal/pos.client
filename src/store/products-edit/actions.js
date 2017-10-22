import { model, get } from 'src/api/products'

const inheritances = ({ family, group }, commit) => {
  let inheritance = {}
  if (family) {
    get({ type: 'families', body: { id: family } }).then((response) => {
      inheritance.family = response
      if (group) {
        get({ type: 'groups', body: { id: group } }).then((response) => {
          inheritance.group = response
          commit('SET_INHERITANCE', { inheritance })
        })
      }
      else {
        commit('SET_INHERITANCE', { inheritance })
      }
    })
  }
  else {
    commit('SET_INHERITANCE', { inheritance })
  }
}

export const empty = function ({ commit }, { type, body }) {
  return model({ type }).then((response) => {
    if (body === undefined) body = {}
    commit('SET_TYPE', { type })
    commit('SET_DATA', { data: { ...response, ...body } })
    inheritances(body, commit)
  })
}

export const edit = function ({ commit }, { type, body }) {
  return get({ type, body }).then((response) => {
    let data = response
    model({ type }).then((response) => {
      commit('SET_TYPE', { type })
      commit('SET_DATA', { data: { ...response, ...data } })
      inheritances(data, commit)
    })
  })
}

export const clear = function ({ commit }) {
  commit('SET_DATA', { data: {} })
  commit('SET_TYPE', { type: '' })
}

export const setColor = function ({ commit }, { color }) {
  commit('SET_COLOR', { color })
}

export const addOption = function ({ commit }, { option }) {
  commit('ADD_OPTION', { option })
}

export const removeOption = function ({ commit }, { option }) {
  commit('REMOVE_OPTION', { option })
}
