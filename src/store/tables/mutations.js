export const SET_TABLES = function (state, tables) {
  state.tables = tables
}

export const SET_TABLE = function (state, table) {
  state.tables = state.tables.map((t) => {
    if (t._id === table._id) return table
    else return t
  })
}
