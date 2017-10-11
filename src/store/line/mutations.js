export const UPDATE_TOTAL = function (state) {
  if (!state.line.price.value || !state.line.quantity.value) return
  var charges = state.line.options.reduce((value, option) => {
    if (option.value) value += option.charge.value
    return value
  }, 0)
  state.line.total = {
    value: Number((state.line.quantity.value * (state.line.price.value + charges)).toFixed(2)),
    currency: state.line.price.currency
  }
}

export const SET_LINE = function (state, line) {
  state.line = line
}

export const SET_LABEL = function (state, label) {
  state.line.label = label
}

export const SET_TICKETLABEL = function (state, ticket) {
  state.line.ticket = ticket
}

export const SET_KITCHENLABEL = function (state, kitchen) {
  state.line.kitchen = kitchen
}

export const SET_PRICE = function (state, price) {
  state.line.price = price
}

export const SET_QUANTITY = function (state, quantity) {
  state.line.quantity = quantity
}

export const SET_TOTAL = (state, total) => {
  state.line.total = total
}

export const SET_ICON = (state, icon) => {
  state.line.icon = icon
}

export const SET_COLOR = (state, color) => {
  state.line.color = color
}

export const SET_OPTIONS = function (state, options) {
  state.line.options = options
}

export const SET_OPTION_VALUE = (state, { option, value }) => {
  option.value = value
  state.line.options = state.line.options.map((o) => {
    if (o.id === option.id) return option
    return o
  })
}

export const SET_ACTION = (state, { action }) => {
  state.action = action
}

export const SET_OVERWRITE = (state, value) => {
  state.overwrite = value
}
