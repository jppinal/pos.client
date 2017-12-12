export const tablesbyRoom = state => (room) => {
  return state.tables.filter(table => table.room === room._id)
}
