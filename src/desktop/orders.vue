<template lang="pug">
.row.absolute-top-left.fit
  .col-4(style="overflow: auto;")
    lines
  .col-8.fit(style="overflow: auto;")
    products
  .row.fixed.full-width
    .col-4
      ticket
  z-line
</template>

<script>
import Ticket from './../components/ticket/actions'
import Lines from './../components/ticket/lines'
import Products from './../components/products/index'
import ZLine from './../components/line/index'

export default {
  name: 'desktop-shopfloor',
  components: {
    Ticket,
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
