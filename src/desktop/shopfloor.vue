<template lang="pug">
.row.absolute-top-left.fit
  .col-8.fit(style="overflow: auto;")
    rooms
  .col-4.fit.relative-position(style="overflow: hidden;")
    .row.full-width.absolute-top-left(style="overflow: hidden; height: 100%;padding: 150px 0px 60px 0px;")
      //lines(style="overflow: scroll;")
    .row.full-width.absolute-top-left
      //actions
</template>

<script>
import Actions from './../components/bill/actions'
import Lines from './../components/bill/index'
import Rooms from './../components/rooms/index'

export default {
  name: 'desktop-shopfloor',
  components: {
    Rooms,
    Actions,
    Lines
  },
  data () {
    return {

    }
  }
}
</script>
