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
            q-chip(:color="l.color" small)
          q-item-main
            .row
              .uppercase {{ l.ticket }}
            .row
              small.uppercase(
                v-for="(o, oi) in activeOptions(l)"
                :key="oi"
                style="margin:1px 2px; padding:1px 6px;")
                span(:class="colortext(o.color)") {{ o.label }}
          q-item-side
            .full-width.text-center
              big.light-paragraph.text-black {{ l.quantity.value }}
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
