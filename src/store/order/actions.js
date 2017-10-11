import { v1 } from 'uuid'

export const addLine = function ({ commit }, { line }) {
  line.id = v1()
  commit('ADD_LINE', { line })
}

export const updateLine = function ({ commit }, { line }) {
  commit('UPDATE_LINE', { line })
}

export const removeLine = function ({ commit }, { line }) {
  commit('REMOVE_LINE', { line })
}
