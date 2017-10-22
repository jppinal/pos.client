<template lang="pug">
.col.full-width
  .col.shadow-2(v-if="family.id")
    .row(style="padding:10px")
      .uppercase.text-grey-7.thin-paragraph Grupos de la familia
        strong.on-right {{ family.properties.label }}
    .row
      q-btn.full-width(
        style="padding: 10px; margin: 5px"
        icon="add"
        color="pink"
        @click="empty({ type: 'groups', body: { family: family.id, collection: family.collection } })"
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
        @click="select({ id: g.id, type:'groups' })") {{ g.properties.label }}
      .col-9
        q-btn.on-left(
          v-for="(p, index) in productsbyGroup(g.id)"
          flat
          :key="index"
          :class="p.properties.css"
          @click="select({ id: p.id, type:'products' })")
          span {{ p.properties.label }}
          small.on-right(v-if="p.properties.price") {{ p.properties.price.value.toFixed(2) }} {{ p.properties.price.currency }}
        q-btn(
          style="padding: 10px; margin: 5px"
          icon="add"
          color="pink"
          @click="empty({ type: 'products', body: { family: family.id, collection: family.collection, group: g.id } })"
          round
          small)
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('productsDb', ['fetch']),
    ...mapActions('productsEdit', ['empty', 'edit']),
    select ({ id, type }) {
      this.edit({ body: { id }, type })
    }
  },
  computed: {
    ...mapState('productsDb', {
      groups: state => state.groups,
      family: state => state.family
    }),
    ...mapGetters('productsDb', [
      'productsbyGroup'
    ])
  }
}
</script>
