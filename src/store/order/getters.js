export const activeOptions = state => (key) => {
  return state.line.options.filter(o => o.value)
}
