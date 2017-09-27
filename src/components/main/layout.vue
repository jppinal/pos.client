<template lang='pug'>
  q-layout(
  ref="layout"
  view="hHr Lpr lFr"
  )
    q-toolbar(
    slot="header"
    color="dark"
    )
      q-toolbar-title(:padding="1") D'Fabula
        span(slot="subtitle") Terminal Punto de Venta 1
      q-btn(flat @click="$refs.layout.toggleRight()")
        q-icon(name="assignment")

    div(slot="right")
    router-view
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      search: '',
      user: 'user'
    }
  }
}
</script>
