// const fs = require('fs')
var floors = require('./../../components/floors/floors.json')
var orders = require('./../../components/floors/orders.json')

export const getFloors = ({ commit }) => {
  commit('SET_FLOORS', { data: floors })
  /* fs.readFile(family, 'utf8', (err, data) => {
    if (err) throw err
    commit('SET_FAMILY', { data })
  }) */
}

export const getTables = ({ commit }, { floorName }) => {
  let floor = floors.find((f) => {
    return f.name === floorName
  })
  if (floor) commit('SET_TABLES', { data: floor.tables })
  /* fs.readFile(family, 'utf8', (err, data) => {
    if (err) throw err
    commit('SET_FAMILY', { data })
  }) */
}

export const setTableState = ({ commit }, { table, state }) => {
  commit('UPDATE_TABLE', { id: table.id, state })
}

export const selectTable = ({ commit }, { table }) => {
  commit('UPDATE_TABLE', { id: table.id, state: '' })
}
