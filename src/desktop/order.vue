<template lang="pug">
.row.absolute-top-left.fit
  .col-4.fit.relative-position(style="overflow: hidden;")
    .row.full-width.absolute-top-left(style="overflow: hidden; height: 100%;padding: 100px 0px 60px 0px;")
      lines(style="overflow: scroll;")
  .col-8.fit(style="overflow: auto;")
    products
  q-btn.fixed(
    style="bottom: 18px; left: 18px;"
    round
    color="green"
    icon="assignment turned in"
    @click="$router.push('/shopfloor')")
  z-line
</template>

<script>
import {
  QBtn
} from 'quasar'

import Lines from './../components/order/lines'
import Products from './../components/products/index'
import ZLine from './../components/line/index'

export default {
  name: 'desktop-order',
  components: {
    QBtn,
    Products,
    ZLine,
    Lines
  },
  data () {
    return {

    }
  }
}
</script>
