export const SET_ROOMS = function (state, rooms) {
  state.rooms = rooms
}

export const SET_ROOM = function (state, room) {
  state.rooms = state.rooms.map((t) => {
    if (t._id === room._id) return room
    else return t
  })
}
