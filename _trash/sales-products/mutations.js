export const SET_FAMILY = (state, { data }) => {
  state.family = data
}

export const SET_PRODUCT_OPTIONS = (state, { options }) => {
  state.productOptions = options.map((option) => {
    return Object.assign({}, option)
  })
}
