<template lang="pug">
.col
  .row.full-width.bg-grey-7.text-white(style="padding: 15px;")
    .col
      span.on-left
        small Total
      big.pull-right {{ total.value.toFixed(2) }} {{ total.currency }}
  .row.full-width.bg-white
    .col
      q-list(
        separator
        sparse
        )
        q-item(
          v-for="(l, i) in lines"
          :key="l.number"
          @click="editLine({ index: i })"
          :class="highlight(i)")
          q-item-side
            strong.on-left {{ l.quantity.value }}
          q-item-main
            .row
              q-icon.on-left(:name="l.icon" :color="l.color")
              small.uppercase {{ l.ticket }}
            .row
              small.uppercase.text-teal-6(v-for="(o,oi) in chargeOptions(l)")
                span(v-if="oi>0") ,
                span {{ o.value.ticket }}
            .row
              small.uppercase.text-grey-6(v-for="(o,oi) in noChargeOptions(l)")
                span(v-if="oi>0") ,
                span {{ o.value.kitchen }}
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
    QScrollArea
  },
  methods: {
    ...mapActions('order', ['selectLine', 'upWards', 'downWards', 'removeLine']),
    ...mapActions('line', ['setLine']),
    editLine ({ index }) {
      this.setLine({ line: this.lines[index] }).then((resolve) => {
        Events.$emit('openOptionsModal', { action: 'update' })
      })
    },
    highlight (i) {
      return {
        'bg-teal-2': i === Number(this.index)
      }
    },
    chargeOptions (l) {
      return l.options.filter((option) => {
        return option.value.charge
      })
    },
    noChargeOptions (l) {
      return l.options.filter((option) => {
        return !option.value.charge
      })
    }
  },
  computed: {
    ...mapState('order', {
      lines: state => state.lines,
      index: state => state.index,
      total: state => state.total
    })
  }
}
</script>
