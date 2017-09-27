<template lang="pug">
.row.absolute-top-left.full-height.full-width.bg-grey-3(style="overflow: hidden;")
  .col-sm-4.fit(style="display:table;")
    ticket
  .col-sm-8.relative-position.full-width.full-height(style="overflow: auto;")
    products
  z-line
</template>

<script>
import Ticket from './ticket/index'
import Products from './products/index'
import ZLine from './line/index'

export default {
  name: 'sales',
  components: {
    Ticket,
    Products,
    ZLine
  },
  data () {
    return {

    }
  }
}
</script>
