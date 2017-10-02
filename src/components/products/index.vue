<template lang="pug">
.col.fit
  .row.full-width
    .col
      q-tabs(color="dark" align="justify" no-pane-border)
        q-tab(
          :icon="c.properties.icon"
          :name="c.properties.label"
          slot="title"
          :label="c.properties.label"
          v-for="(c,index) in collections"
          @select="select({ id: c.id, type: 'collections' })"
          :key="index")
  .row.full-width(style="padding: 10px;")
    families
  .row.full-width
    products
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane
} from 'quasar'

import Families from './families'
import Products from './products'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'sales',
  components: {
    QTabs,
    QTab,
    QTabPane,
    Families,
    Products
  },
  methods: {
    ...mapActions('products', ['fetch', 'fetchOne', 'fetchArray']),
    select ({ id, type }) {
      this.fetchOne({ id, type }).then((resolve) => {
        this.fetch({ type: 'families', body: { collection_id: id } }).then((response) => {
          let f = this.family[0]
          if (!f) return
          this.fetch({ type: 'groups', body: { family_id: f.id } }).then((response) => {
            this.fetchArray({ type: 'groups', array: this.groups })
          })
        })
      })
    }
  },
  computed: {
    ...mapState('products', {
      family: state => state.family,
      groups: state => state.groups,
      collection: state => state.collection,
      collections: state => state.collections
    })
  },
  data () {
    return {

    }
  }
}
</script>
