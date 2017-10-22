<template lang="pug">
.row.full-width
  products
  z-line
  q-btn.fixed(
    style="bottom: 18px; right: 18px;"
    round
    color="secondary"
    icon="assignment"
    @click="$router.push('./order')")
</template>

<script>
import {
  QBtn
} from 'quasar'

import Products from './../components/products/index'
import ZLine from './../components/line/index'

export default {
  name: 'mobile-products',
  components: {
    QBtn,
    Products,
    ZLine
  },
  data () {
    return {

    }
  }
}
</script>
