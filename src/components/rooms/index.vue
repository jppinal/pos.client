<template lang="pug">
.row.fit.bg-dark
  q-tabs.fit(color="dark" align="justify" no-pane-border)
    q-tab(
      :icon="r.icon"
      :name="r.name"
      slot="title"
      :label="r.label"
      v-for="(r,index) in rooms"
      :key="index")
    q-tab-pane.fit(:name="r.name" v-for="(r,index) in rooms" :key="index")
      q-btn(v-for="(t,index) in tablesbyRoom(r)"
        :style="{ position: 'absolute', top: t.top, left: t.left, height: '50px', width: '50px' }"
        :color="t.color"
        :key="index"
        @click="fetchBill(t.bill)")
        span {{ t.label }}
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane,
  QBtn
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'Rooms',
  components: {
    QTabs,
    QTab,
    QTabPane,
    QBtn
  },
  methods: {
    ...mapActions('rooms', [ 'fetchRooms', 'attachRoomEvents' ]),
    ...mapActions('tables', [ 'fetchTables', 'attachTableEvents' ]),
    ...mapActions('bill', [ 'fetchBill', 'attachBillEvents' ])
  },
  computed: {
    ...mapState('rooms', {
      rooms: state => state.rooms
    }),
    ...mapGetters('tables', [ 'tablesbyRoom' ])
  },
  mounted () {
    this.attachRoomEvents().then(() => this.fetchRooms())
    this.attachTableEvents().then(() => this.fetchTables())
    this.attachBillEvents().then()
  },
  data () {
    return {
    }
  }
}
</script>
