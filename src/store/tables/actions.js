import { tables } from 'src/api/shopfloor'

export const attachTableEvents = ({ commit }) => {
  return new Promise((resolve) => {
    tables.found((tables) => commit('SET_TABLES', tables))
    tables.got((table) => commit('SET_TABLE', table))
    resolve()
  })
}

export const fetchTables = ({ commit }) => {
  tables.find({})
}

export const setTables = ({ commit }, tables) => {
  commit('SET_TABLES', tables)
}

export const setTable = ({ commit }, table) => {
  commit('SET_TABLE', table)
}
