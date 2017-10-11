<template lang="pug">
.col
  .row.full-width.bg-white
    .col
      q-list(
        separator
        sparse
        )
        q-item(
          v-for="(l, i) in lines"
          :key="i"
          @click="editLine({ line: l })"
          :class="highlight(i)")
          q-item-side
            big.light-paragraph.text-right.text-black
              .on-left {{ l.quantity.value }}
          q-item-main
            .row
              .uppercase {{ l.ticket }}
            .row
              small.uppercase(
                v-for="(o, oi) in activeOptions(l)"
                :key="oi"
                style="margin:1px 2px")
                span(:class="colortext(o.color)") {{ o.label }}
          q-item-side(right)
            span {{ l.total.value.toFixed(2) }}
              small.on-right {{ l.total.currency }}
</template>

<script>
import {
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QScrollArea,
  QChip,
  Events
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'lines',
  components: {
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QScrollArea,
    QChip
  },
  methods: {
    ...mapActions('line', ['setLine']),
    editLine ({ line }) {
      this.setLine({ line }).then((resolve) => {
        Events.$emit('openLineModal', { action: 'update' })
      })
    },
    highlight (i) {
      return {
        'bg-teal-2': i === Number(this.index)
      }
    },
    activeOptions (l) {
      return l.options.filter(o => o.value)
    },
    colortext (c) {
      return `text-${c}`
    }
  },
  computed: {
    ...mapState('order', {
      lines: state => state.lines
    })
  }
}
</script>
