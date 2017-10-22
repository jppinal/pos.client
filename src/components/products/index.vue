<template lang="pug">
.col.fit
  .row.full-width
    .col
      q-tabs(color="dark" align="justify" no-pane-border)
        q-tab(
          :icon="c.properties.icon"
          :name="c.id"
          slot="title"
          :label="c.properties.label"
          v-for="(c,index) in collections"
          @click="setFamily({ family: {} })"
          :key="index")
        q-tab-pane(
          :name="c.id"
          v-for="(c,index) in collections"
          :key="index")
          .row.full-width
            families(:collection="c.id")
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
  name: 'products-component',
  components: {
    QTabs,
    QTab,
    QTabPane,
    Families,
    Products
  },
  created () {
    console.log('created')
    this.fetch({ type: 'collections' })
    this.fetch({ type: 'families' })
  },
  methods: {
    ...mapActions('products', ['fetch', 'setFamily'])
  },
  computed: {
    ...mapState('products', {
      collections: state => state.collections
    })
  },
  data () {
    return {

    }
  }
}
</script>
