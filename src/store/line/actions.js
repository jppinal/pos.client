import { LINE } from './data-model'

export const setLine = function ({ commit }, { line }) {
  var l = Object.assign(LINE(), line)
  l.price = Object.assign({}, l.price)
  l.quantity = Object.assign({}, l.quantity)
  l.total = Object.assign({}, l.total)
  l.options = l.options.map(opt => {
    return Object.assign({}, opt)
  })

  commit('SET_LINE', l)
  commit('UPDATE_TOTAL')
}

export const activateOption = function ({ commit }, { option }) {
  commit('SET_OPTION_VALUE', { option, value: true })
  commit('UPDATE_TOTAL')
}

export const deactivateOption = function ({ commit }, { option }) {
  commit('SET_OPTION_VALUE', { option, value: false })
  commit('UPDATE_TOTAL')
}

export const setQuantity = ({ commit }, { quantity, n }) => {
  var q = {
    value: n,
    unit: quantity.unit
  }
  commit('SET_QUANTITY', q)
  commit('SET_OVERWRITE', false)
  commit('UPDATE_TOTAL')
}

export const addToQuantity = ({ commit }, { quantity, n }) => {
  var q = {
    value: quantity.value * 10 + n,
    unit: quantity.unit
  }
  commit('SET_QUANTITY', q)
  commit('UPDATE_TOTAL')
}

export const resetQuantity = ({ commit }, { quantity }) => {
  var q = {
    value: 0,
    unit: quantity.unit
  }
  commit('SET_QUANTITY', q)
  commit('SET_OVERWRITE', true)
  commit('UPDATE_TOTAL')
}

export const setAction = ({ commit }, { action }) => {
  commit('SET_ACTION', { action })
}

export const resetOverwrite = ({ commit }) => {
  commit('SET_OVERWRITE', true)
}
