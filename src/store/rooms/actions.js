import { rooms } from 'src/api/shopfloor'

export const attachRoomEvents = ({ commit }) => {
  return new Promise((resolve) => {
    rooms.found((rooms) => commit('SET_ROOMS', rooms))
    rooms.got((room) => commit('SET_ROOM', room))
    resolve()
  })
}

export const fetchRooms = ({ commit }) => {
  rooms.find({})
}

export const setRooms = ({ commit }, rooms) => {
  commit('SET_ROOMS', rooms)
}

export const setRoom = ({ commit }, room) => {
  commit('SET_ROOM', room)
}
