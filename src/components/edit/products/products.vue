<template lang="pug">
.col.full-width
  .col.shadow-2(v-if="family.properties")
    .row(style="padding:10px")
      .uppercase.text-grey-7.thin-paragraph Grupos de la familia
        strong.on-right {{ family.properties.label }}
    .row
      q-btn.full-width(
        style="padding: 10px; margin: 5px"
        icon="add"
        color="pink"
        @click="newGroup()"
        small
        flat) Nuevo Grupo
    .row(
      v-for="(g, index) in groups"
      :key="index"
      :class="g.properties.css"
      style="padding: 10px;"
      v-if="g.properties"
      )
      .col-3
        q-btn(:icon="g.icon" flat
        @click="select({ id: g.id, type:'groups', family })") {{ g.properties.label }}
      .col-9
        q-btn.on-left(
          v-for="(p, index) in g.products"
          flat
          :key="index"
          :class="p.css"
          @click="select({ id: p.id, type:'products', family, group: g })")
          span {{ p.label }}
          small.on-right(v-if="p.price") {{ p.price.value.toFixed(2) }} {{ p.price.currency }}
        q-btn(
          style="padding: 10px; margin: 5px"
          icon="add"
          color="pink"
          @click="newProduct(g)"
          round
          small)
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'products',
  mounted () {
    this.fetch({ type: 'groups', body: { family_id: this.family.id } })
  },
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('products', ['fetch', 'fetchOne']),
    ...mapActions('edit', ['empty', 'setData']),
    newGroup () {
      this.empty({ type: 'groups', body: { family: this.family } })
    },
    newProduct (group) {
      this.empty({ type: 'products', body: { family: this.family, group } })
    },
    select ({ id, type, family, group }) {
      this.fetchOne({ id, type }).then((resolve) => {
        let data = {}
        if (type === 'groups') data = this.group
        else data = this.product
        if (family) data.family = family
        if (group) data.group = group
        this.setData({ data, type })
      })
    }
  },
  computed: {
    ...mapState('products', {
      family: state => state.family,
      groups: state => state.groups,
      group: state => state.group,
      product: state => state.product
    })
  }
}
</script>
