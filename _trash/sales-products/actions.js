// const fs = require('fs')
// var coffees = require('./../../components/sales/drinks/coffees.json')

export const getFamily = ({ commit }, { family }) => {
  // commit('SET_FAMILY', { data: coffees })
  /* fs.readFile(family, 'utf8', (err, data) => {
    if (err) throw err
    commit('SET_FAMILY', { data })
  }) */
}

export const setProductOptions = ({ commit }, { options }) => {
  commit('SET_PRODUCT_OPTIONS', { options })
}
