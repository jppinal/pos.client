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

export default {
  name: 'sales',
  components: {
    QTabs,
    QTab,
    QTabPane,
    QBtn
  },
  data () {
    return {
      rooms: [
        {
          name: 'indoor',
          icon: '',
          label: 'Salón',
          tables: [
            {
              label: '1',
              top: '50px',
              left: '10px',
              color: 'secondary'
            },
            {
              label: '1',
              top: '50px',
              left: '50px',
              color: 'secondary'
            },
            {
              label: '1',
              top: '60px',
              left: '100px',
              color: 'secondary'
            }

          ]
        },
        {
          name: 'outdoor',
          icon: '',
          label: 'Terraza',
          tables: [
            {
              label: 'T1',
              top: '10px',
              left: '10px',
              color: 'secondary'
            }
          ]
        }
      ]
    }
  }
}
</script>
