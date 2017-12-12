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
      q-btn(v-for="(t,index) in r.tables"
        :style="{ position: 'absolute', top: t.top, left: t.left, height: '50px', width: '50px' }"
        :color="t.color"
        :key="index"
        @click="setTable()")
        span {{ t.label }}
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane,
  QBtn
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'edit-rooms',
  components: {
    QTabs,
    QTab,
    QTabPane,
    QBtn
  },
  created () {
    this.fetch({ type: 'rooms' })
    this.fetch({ type: 'tables' })
  },
  methods: {
    ...mapActions('rooms', ['fetch']),
    newOption () {
      // this.empty({ type: 'options' })
    },
    select ({ id, type }) {
      // this.edit({ body: { id }, type })
    }
  },
  computed: {
    ...mapState('rooms', {
      rooms: state => state.rooms
    })
  },
  data () {
    return {

    }
  }
}
</script>
