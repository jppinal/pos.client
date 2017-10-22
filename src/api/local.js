import { get as productsGet, find as productsFind } from './products'

const Datastore = require('nedb')
const db = new Datastore()

const insert = (type, array, cb) => {
  if (array.length < 1) return cb()
  var body = array.pop()
  productsGet({ type, body }).then((response) => {
    db.insert(response, function () {
      insert(type, array, cb)
    })
  })
}

const populate = ({ type }) => {
  return new Promise((resolve, reject) => {
    productsFind({ type, body: {} }).then((response) => {
      insert(type, response, resolve)
    })
  })
}

export const load = () => {
  return new Promise((resolve, reject) => {
    populate({ type: 'collections' }).then((response) => {
      populate({ type: 'families' }).then((response) => {
        populate({ type: 'groups' }).then((response) => {
          populate({ type: 'products' }).then((response) => {
            console.log('data loaded')
            resolve(response)
          })
        })
      })
    })
  })
}

export const find = ({ type, collection, family, group }) => {
  return new Promise((resolve, reject) => {
    var query = { }
    if (type) query.type = type
    if (collection) query.collection = collection
    if (family) query.family = family
    if (group) query.group = group
    db.find(query, (err, docs) => {
      if (err) console.log(err)
      resolve(docs)
    })
  })
}

export const get = ({ type, id }) => {
  var query = { }
  if (id) query.id = id
  if (type) query.type = type
  db.find(query, (err, docs) => {
    if (err) console.log(err)
    console.log(docs)
  })
}
