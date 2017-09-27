export const addLine = function ({ commit }, { line }) {
  commit('ADD_LINE', { line })
  commit('UPDATE_TOTAL')
}

export const updateLine = function ({ commit }, { line }) {
  commit('UPDATE_LINE', { line })
  commit('UPDATE_TOTAL')
}

export const removeLine = function ({ commit }, { index }) {
  commit('REMOVE_LINE', { index })
}

export const selectLine = function ({ commit }, { index }) {
  commit('SET_INDEX', { index })
}

export const upWards = function ({ commit }) {
  commit('PREV_INDEX')
}

export const downWards = function ({ commit }, { lines, index }) {
  commit('NEXT_INDEX')
}
