export const COLLECTION = {
  properties: {
    label: '',
    icon: ''
  },
  id: undefined
}

export const FAMILY = {
  properties: {
    label: '',
    icon: '',
    color: ''
  },
  options: [],
  id: undefined
}

export const GROUP = {
  properties: {
    label: '',
    icon: '',
    css: ''
  },
  options: [],
  family: {},
  id: undefined
}

export const PRODUCT = {
  properties: {
    label: '',
    icon: '',
    color: '',
    ticket: '',
    kitchen: '',
    price: {
      value: 0,
      currency: 'EUR'
    },
    taxes: 10
  },
  options: [],
  family: {},
  id: undefined
}

export const OPTION = {
  properties: {
    label: '',
    icon: '',
    color: '',
    ticket: '',
    kitchen: '',
    charge: {
      value: 0,
      currency: 'EUR'
    },
    taxes: 10
  },
  id: undefined
}
