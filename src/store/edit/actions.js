import { model } from 'src/api/products'

export const empty = function ({ commit }, { type, body }) {
  model({ type }).then((response) => {
    commit('SET_DATA', { data: { ...response, ...body } })
  })
  commit('SET_TYPE', { type })
}

export const clear = function ({ commit }) {
  commit('SET_DATA', { data: {} })
  commit('SET_TYPE', { type: '' })
}

export const setData = function ({ commit }, { data, type }) {
  model({ type }).then((response) => {
    commit('SET_DATA', { data: { ...response, ...data } })
  })
  commit('SET_TYPE', { type })
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
