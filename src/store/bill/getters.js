export const ordersbyTable = state => (table) => {
  return state.orders.filter(order => order.table === table._id)
}
