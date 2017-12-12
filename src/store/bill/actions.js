import { bill } from 'src/api/shopfloor'

export const attachTableEvents = ({ commit }, bill) => {
  return new Promise((resolve) => {
    bill.got((bill) => commit('SET_BILL', bill))
    resolve()
  })
}

export const fetchBill = ({ commit }, bill) => {
  bill.get(bill)
}

export const setBill = ({ commit }, bill) => {
  commit('SET_BILL', bill)
}
