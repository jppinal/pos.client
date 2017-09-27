export const ADD_LINE = function (state, { line }) {
  state.index = state.lines.push(Object.assign({}, line)) - 1
}

export const UPDATE_LINE = function (state, { line }) {
  state.lines = state.lines.map((l) => {
    return l
  })
}

export const REMOVE_LINE = function (state, { index }) {
  state.lines.splice(index, 1)
}

export const SET_INDEX = function (state, { index }) {
  state.index = Number(index)
}

export const NEXT_INDEX = function (state) {
  let up = state.index + 1
  if (up < state.lines.length) state.index = Number(up)
}

export const PREV_INDEX = function (state) {
  let down = state.index - 1
  if (down >= 0) state.index = Number(down)
}

export const UPDATE_TOTAL = function (state) {
  state.total.value = state.lines.reduce((value, line) => {
    value += line.total.value
    return value
  }, 0)
}
