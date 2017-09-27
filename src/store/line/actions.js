import { LINE } from './data-model'

export const setLine = function ({ commit }, { line, label, ticket, kitchen, price, quantity, total, icon, color, options }) {
  if (line) commit('SET_LINE', { line })
  if (label) commit('SET_LABEL', { label })
  if (ticket) commit('SET_TICKETLABEL', { ticket })
  if (kitchen) commit('SET_KITCHENLABEL', { kitchen })
  if (price) {
    commit('SET_PRICE', { price })
    commit('UPDATE_TOTAL')
  }
  if (quantity) {
    commit('SET_QUANTITY', { quantity })
    commit('UPDATE_TOTAL')
  }
  if (total) commit('SET_TOTAL', { total })
  if (icon) commit('SET_ICON', { icon })
  if (color) commit('SET_COLOR', { color })
  if (options) {
    commit('SET_OPTIONS', { options })
    commit('UPDATE_TOTAL')
  }
}

export const clearLine = function ({ commit }) {
  commit('SET_LINE', { line: LINE })
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
  let q = Object.assign(quantity)
  q.value = n
  commit('SET_QUANTITY', { quantity })
  commit('SET_OVERWRITE', false)
  commit('UPDATE_TOTAL')
}

export const addToQuantity = ({ commit }, { quantity, n }) => {
  let q = Object.assign(quantity)
  q.value = q.value * 10 + n
  commit('SET_QUANTITY', { quantity })
  commit('UPDATE_TOTAL')
}

export const resetQuantity = ({ commit }, { quantity }) => {
  let q = Object.assign(quantity)
  q.value = 0
  commit('SET_QUANTITY', { quantity: q })
  commit('SET_OVERWRITE', true)
  commit('UPDATE_TOTAL')
}

export const setAction = ({ commit }, { action }) => {
  commit('SET_ACTION', { action })
}

export const resetOverwrite = ({ commit }) => {
  commit('SET_OVERWRITE', true)
}
