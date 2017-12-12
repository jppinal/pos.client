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
      span.text-pink.on-left Modo edición
      q-btn(flat @click="$refs.layout.toggleRight()" color="pink")
        q-icon(name="menu")

    q-list.fit.bg-grey-2(slot="right" sparse separator)
      q-item
        q-item-side
          q-item-tile(label) John Doe
          q-item-tile(sublabel) Administrator
      q-side-link(item to="/edit/rooms" exact)
        q-item-side(icon="chat_bubble")
        q-item-main(label="Editar Salones")
      q-side-link(item to="/edit/products" exact)
        q-item-side(icon="chat_bubble")
        q-item-main(label="Editar Carta")
      q-side-link(item to="/edit/options" exact)
        q-item-side(icon="chat_bubble")
        q-item-main(label="Editar Opciones" sublabel="de productos")
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
  QItemMain,
  QItemTile,
  QSideLink
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
    QItemMain,
    QItemTile,
    QSideLink
  },
  data () {
    return {
      search: '',
      user: 'user'
    }
  }
}
</script>
