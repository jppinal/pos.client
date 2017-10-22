export const SET_DATA = function (state, { data }) {
  state.data = data
}

export const SET_INHERITANCE = function (state, { inheritance }) {
  state.inheritance = inheritance
}

export const SET_TYPE = function (state, { type }) {
  state.type = type
}

export const SET_COLOR = function (state, { color }) {
  state.data.properties.color = color
}

export const ADD_OPTION = (state, { option }) => {
  if (state.data.options.some((o) => {
    return option.id === o.id
  })) return
  state.data.options.push(option)
}

export const REMOVE_OPTION = (state, { option }) => {
  if (state.data.options.some((o) => {
    return option.id === o.id
  })) {
    state.data.options = state.data.options.filter((o) => {
      return o.id !== option.id
    })
  }
}
