import io from 'socket.io-client'

const socket = io('http://localhost:3032', {transports: ['websocket']})

class Handler {
  constructor (type) {
    this._TYPE = type
  }

  get (query) {
    socket.emit(`get ${this._TYPE}`, query, socket.id)
  }

  got (listener) {
    socket.on(`got ${this._TYPE}`, listener)
  }

  find (query) {
    socket.emit(`find ${this._TYPE}`, query, socket.id)
  }

  found (listener) {
    socket.on(`found ${this._TYPE}`, listener)
  }

  on (eventName, listener) {
    socket.on(eventName, listener)
  }

  emit (eventName) {
    socket.emit.apply(this, [eventName, ...arguments, socket.id])
  }
}

export const orders = new Handler('orders')
export const tables = new Handler('tables')
export const rooms = new Handler('rooms')
export const bill = new Handler('bill')
