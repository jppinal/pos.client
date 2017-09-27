<template lang="pug">
.col.full-width
  q-card.text-dark(color="yellow-3")
    q-card-actions(align="around")
      q-btn.on-left(flat val="toast1" color="red") Rústico
      q-btn.on-left(flat val="toast2") Integral
      q-btn.on-left(flat val="toast5") Centeno
      q-btn.on-left(flat val="toast6") Cereales
      q-btn.on-left(flat val="toast9") Casero
  q-card.text-dark(color="yellow-1")
    q-card-main
      q-list(no-border)
        q-item(separator)
          q-item-side(icon="opacity" color="lime-8")
          q-item-main
            .row
              q-btn.on-left(flat val="toast1" color="red") Aceite
              q-btn.on-left(flat val="toast2" color="red") Con Tomate
        q-item(separator)
          q-item-side(icon="star" color="yellow-14")
          q-item-main
            .row
              q-btn.on-left(flat val="toast3") Mantequilla
              q-btn.on-left(flat val="toast4") Con Mermelada
              q-btn.on-left(flat val="toast4") Arándanos
              q-btn.on-left(flat val="toast4") Fresa
        q-item(separator)
          q-item-side(icon="spa" color="light-green")
          q-item-main
            .row
              q-btn.on-left(flat val="toast3") Margarina
              q-btn.on-left(flat val="toast4") Con Mermelada
              q-btn.on-left(flat val="toast4") Arándanos
              q-btn.on-left(flat val="toast4") Fresa
  q-card.text-black(color="yellow-14")
    q-card-actions(align="around")
      q-btn(flat) Entera
      q-btn(flat) Media
</template>

<script>
import {
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QCard,
  QCardMedia,
  QCardMain,
  QCardActions
} from 'quasar'

export default {
  name: 'index',
  components: {
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QCard,
    QCardMedia,
    QCardMain,
    QCardActions
  },
  data () {
    return {
      toast: 'toast1'
    }
  }
}
</script>
