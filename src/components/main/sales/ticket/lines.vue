<template lang="pug">
.col
  .row.full-width.bg-white
    .col
      q-scroll-area(
        style="height: 525px; overflow: auto;"
        )
        q-list.no-border
          q-item(
            v-for="(l, i) in lines"
            :key="l.number"
            @click="selectLine({ index: i })"
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
  .row.full-width
    .col-3
      q-btn.full-width(color="dark" style="height: 60px;"
        @click="upWards")
        q-icon(name="arrow drop up")
    .col-3
      q-btn.full-width(flat color="amber-10" style="height: 60px;"
        @click="editLine({ index })")
        q-icon(name="create")
    .col-3
      q-btn.full-width(flat color="red-5" style="height: 60px;"
        @click="removeLine({ index })")
        q-icon(name="delete sweep")
    .col-3
      q-btn.full-width(color="dark" style="height: 60px;"
        @click="downWards")
        q-icon(name="arrow drop down")
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
    ...mapActions('salesTicket', ['selectLine', 'upWards', 'downWards', 'removeLine']),
    ...mapActions('salesLine', ['setLine']),
    editLine ({ index }) {
      this.setLine({ line: this.lines[index] }).then((resolve) => {
        Events.$emit('openLineModal', { action: 'update' })
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
    ...mapState('salesTicket', {
      lines: state => state.lines,
      index: state => state.index
    })
  }
}
</script>
