<template lang="pug">
.col.full-width
  .col.shadow-2(v-if="family.id")
    .row(style="padding:10px")
      .uppercase.text-grey-7.thin-paragraph Grupos de la familia
        strong.on-right {{ family.properties.label }}
    .row(
      v-for="(g, index) in groups"
      :key="index"
      :class="g.properties.css"
      style="padding: 10px;"
      v-if="g.properties"
      )
      .col-sm-2
        q-btn(:icon="g.icon" flat disable small) {{ g.properties.label }}
      .col-sm-10
        q-btn.on-left(
          v-for="(p, index) in productsbyGroup(g.id)"
          flat
          :key="index"
          :class="p.properties.css"
          @click="select(p, g.options)")
          span {{ p.properties.label }}
          small.on-right(v-if="p.properties.price") {{ p.properties.price.value.toFixed(2) }} {{ p.properties.price.currency }}
</template>

<script>
import {
  QBtn,
  QIcon,
  Events
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('line', ['setLine']),
    select ({ properties, options }, groupOptions) {
      var line = Object.assign({}, properties)
      line.options = []
      if (options) line.options = options
      if (groupOptions) line.options = [ ...groupOptions, ...line.options ]
      if (this.family.options) line.options = [ ...this.family.options, ...line.options ]
      line.color = this.family.properties.color
      line.icon = this.family.properties.icon
      this.setLine({ line }).then((resolve) => {
        Events.$emit('openLineModal', { action: 'create' })
      })
    }
  },
  computed: {
    ...mapState('products', {
      groups: state => state.groups,
      family: state => state.family
    }),
    ...mapGetters('products', [
      'productsbyGroup'
    ])
  }
}
</script>
