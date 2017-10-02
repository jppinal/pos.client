<template lang="pug">
.col.full-width
  .col.shadow-2(v-if="family.properties")
    .row(
      v-for="(g, index) in groups"
      :key="index"
      :class="g.properties.css"
      style="padding: 10px;"
      v-if="g.properties"
      )
      .col-3
        q-btn(:icon="g.icon" flat) {{ g.properties.label }}
      .col-9
        q-btn.on-left(
          v-for="(p, index) in g.products"
          flat
          :key="index"
          :class="p.css"
          @click="select({ product: p, options: [...family.options, ...g.options, ...p.options] })")
          span {{ p.label }}
          small.on-right(v-if="p.price") {{ p.price.value.toFixed(2) }} {{ p.price.currency }}
</template>

<script>
import {
  QBtn,
  QIcon,
  Events
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'products',
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('salesLine', ['clearLine', 'setLine']),
    select ({ product, options }) {
      product.options = options.filter(c => c)
      console.log(product)
      this.clearLine().then((resolve) => {
        this.setLine(product).then((resolve) => {
          Events.$emit('openLineModal', { action: 'create' })
        })
      })
    }
  },
  computed: {
    ...mapState('products', {
      family: state => state.family,
      groups: state => state.groups
    })
  }
}
</script>
