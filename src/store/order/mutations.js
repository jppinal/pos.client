export const ADD_LINE = function (state, { line }) {
  state.lines.push(Object.assign({}, line))
}

export const UPDATE_LINE = function (state, { line }) {
  state.lines = state.lines.map((l) => {
    if (l.id === line.id) return line
    return l
  })
}

export const REMOVE_LINE = function (state, { line }) {
  let index = state.lines.findIndex((l) => {
    return l.id === line.id
  })
  if (index) state.lines.splice(index, 1)
}
