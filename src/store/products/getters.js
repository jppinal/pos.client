export const productsbyGroup = state => (group) => {
  return state.products.filter(p => p.group === group)
}

export const familiesbyCollection = state => (collection) => {
  return state.families.filter(f => f.collection === collection)
}
