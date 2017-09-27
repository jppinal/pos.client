<template lang="pug">
.col.fit
  .row.full-width
    .col.full-height
      q-btn.full-width(
        color="secondary"
        style="height: 70px"
        )
        q-icon(
          name="play circle filled"
          size="42px"
          )
        span Cobrar
    .col.full-height
      q-btn.full-width(
        flat
        color="grey-7"
        style="height: 70px"
        )
        q-icon(
          name="print"
          size="32px"
          )
        span Cuenta
  .row.full-width.bg-grey-7.text-white(style="padding: 15px;")
    .col
      span.on-left
        small Total
      big.pull-right {{ total.value.toFixed(2) }} {{ total.currency }}
  .row.fit
    lines
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapState } from 'vuex'

import Lines from './lines'

export default {
  name: 'ticket',
  components: {
    QBtn,
    QIcon,
    Lines
  },
  computed: {
    ...mapState('salesTicket', {
      total: state => state.total,
      lines: state => state.lines
    })
  }
}

</script>
