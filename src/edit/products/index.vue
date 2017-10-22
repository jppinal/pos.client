<template lang="pug">
.row.absolute-top-left.fit.bg-grey-3(style="overflow: hidden;")
  .col-4.fit.bg-teal-2.relative-position.full-width.full-height(style="overflow: auto;")
    properties
  .col-sm-8.relative-position.full-width.full-height(style="overflow: auto;")
    .row.full-width
      .col
        q-tabs(color="dark" align="justify" no-pane-border)
          q-tab(
            :icon="c.properties.icon"
            :name="c.id"
            slot="title"
            :label="c.properties.label"
            v-for="(c,index) in collections"
            @click="select({ id: c.id, type: 'collections' })"
            :key="index")
          q-tab(
            icon="add"
            name="add-collection"
            color="pink"
            slot="title"
            @click="add({ type: 'collections' })")
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
import Properties from '../properties/index'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'edit-products',
  components: {
    QTabs,
    QTab,
    QTabPane,
    Families,
    Products,
    Properties
  },
  created () {
    this.fetch({ type: 'collections' })
    this.fetch({ type: 'families' })

    this.cHandler = () => {
      this.fetch({ type: 'collections' })
      this.setFamily({ family: {} })
    }
    this.fHandler = () => {
      this.fetch({ type: 'families' })
      this.setFamily({ family: {} })
    }
    this.gHandler = ({ family }) => {
      this.fetch({ type: 'groups', body: { family } })
    }
    this.pHandler = ({ family }) => {
      this.fetch({ type: 'products', body: { family } })
    }
    this.$q.events.$on('collections', this.cHandler)
    this.$q.events.$on('families', this.fHandler)
    this.$q.events.$on('groups', this.gHandler)
    this.$q.events.$on('products', this.pHandler)
    this.$q.events.$on('options', this.oHandler)
  },
  beforeDestroy () {
    this.$q.events.$off('collections', this.cHandler)
    this.$q.events.$off('families', this.fHandler)
    this.$q.events.$off('groups', this.gHandler)
    this.$q.events.$off('products', this.pHandler)
    this.$q.events.$off('options', this.oHandler)
  },
  methods: {
    ...mapActions('productsDb', ['fetch', 'setFamily']),
    ...mapActions('productsEdit', ['empty', 'edit']),
    select ({ id, type }) {
      this.edit({ body: { id }, type })
      this.setFamily({ family: {} })
    },
    add ({ type }) {
      this.empty({ type })
      this.setFamily({ family: {} })
    }
  },
  computed: {
    ...mapState('productsDb', {
      collections: state => state.collections
    })
  },
  data () {
    return {

    }
  }
}
</script>
