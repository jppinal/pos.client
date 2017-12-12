export const SET_BILL = function (state, bill) {
  state.tables = bill.tables
  state.orders = bill.orders
}
