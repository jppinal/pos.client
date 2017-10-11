import io from 'socket.io-client'

const socket = io('http://localhost:3031', {transports: ['websocket']})

export const create = ({ type, body }) => {
  return new Promise((resolve, reject) => {
    socket.emit('create', { type, body }, socket.id, (response) => {
      resolve(response)
    })
  })
}

export const update = ({ type, body }) => {
  return new Promise((resolve, reject) => {
    socket.emit('update', { type, body }, socket.id, (response) => {
      resolve(response)
    })
  })
}

export const get = ({ type, body }) => {
  return new Promise((resolve, reject) => {
    socket.emit('get', { type, body }, socket.id, (response) => {
      resolve(response)
    })
  })
}

export const find = ({ type, body }) => {
  return new Promise((resolve, reject) => {
    socket.emit('find', { type, body }, socket.id, (response) => {
      resolve(response)
    })
  })
}

export const remove = ({ type, body }) => {
  return new Promise((resolve, reject) => {
    socket.emit('delete', { type, body }, socket.id, (response) => {
      resolve(response)
    })
  })
}

export const model = ({ type }) => {
  return new Promise((resolve, reject) => {
    socket.emit('model', { type }, socket.id, (response) => {
      resolve(response)
    })
  })
}
