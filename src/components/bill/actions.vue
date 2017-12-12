<template lang="pug">
.col
  .row.bg-grey-7.text-white
    .col-4(style="padding: 15px;")
      small.block Mesa
      big.block.text-center XX
    .col-8(style="padding: 15px;")
      small.block Total
      big.block.text-center {{ total.value.toFixed(2) }} {{ total.currency }}
  .row.bg-grey-3
    .col
      q-btn.full-width(
        color="secondary"
        style="height: 70px"
        )
        q-icon(
          name="play circle filled"
          size="42px"
          )
        span Cobrar
    .col
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
  q-btn.fixed(
    round
    color="primary"
    @click="$router.push('/products')"
    style="right: 18px; bottom: 18px")
    q-icon(name="add")
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapState } from 'vuex'

export default {
  name: 'actions',
  components: {
    QBtn,
    QIcon
  },
  computed: {
    ...mapState('salesTicket', {
      total: state => state.total
    })
  }
}

</script>
