import Vuex from 'vuex'
// import auth from './auth-module'
// import material from './material-module'
// import suppliers from './suppliers-module'
// import inbounds from './inbounds-module'
// import uoms from './uoms-module'
// import orders from './orders-module'
// import i18n from './i18n-module'
import salesLine from './line'
import salesTicket from './ticket'
import products from './products'
import edit from './edit'

export default function () {
  return new Vuex.Store({
    modules: { salesLine, salesTicket, products, edit }
  })
}
