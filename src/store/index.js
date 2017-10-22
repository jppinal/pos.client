import Vuex from 'vuex'
// import auth from './auth-module'
// import material from './material-module'
// import suppliers from './suppliers-module'
// import inbounds from './inbounds-module'
// import uoms from './uoms-module'
// import orders from './orders-module'
// import i18n from './i18n-module'
import line from './line'
import ticket from './ticket'
import order from './order'
import products from './products'
import productsEdit from './products-edit'
import productsDb from './products-db'

export default function () {
  return new Vuex.Store({
    modules: { line, ticket, order, products, productsEdit, productsDb }
  })
}
