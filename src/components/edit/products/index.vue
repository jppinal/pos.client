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
            :name="c.properties.label"
            slot="title"
            :label="c.properties.label"
            v-for="(c,index) in collections"
            @select="select({ id: c.id, type: 'collections' })"
            :key="index")
          q-tab(
            icon="add"
            color="pink"
            slot="title"
            @select="empty({ type: 'collections' })")
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
    this.cHandler = () => {
      this.fetch({ type: 'collections' })
    }
    this.fHandler = () => {
      this.fetch({ type: 'families', body: { collection_id: this.collection.id } })
    }
    this.gHandler = () => {
      this.fetch({ type: 'groups', body: { family_id: this.family.id } }).then((response) => {
        this.fetchArray({ type: 'groups', array: this.groups })
      })
    }
    this.pHandler = () => {
      this.fetchArray({ type: 'groups', array: this.groups })
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
    ...mapActions('products', ['fetch', 'fetchOne', 'fetchArray']),
    ...mapActions('edit', ['empty', 'setData']),
    select ({ id, type }) {
      this.fetchOne({ id, type }).then((resolve) => {
        this.fetch({ type: 'families', body: { collection_id: id } }).then((response) => {
          let f = this.family[0]
          if (!f) return
          this.fetch({ type: 'groups', body: { family_id: f.id } }).then((response) => {
            this.fetchArray({ type: 'groups', array: this.groups })
          })
        })
        this.setData({ data: this.collection, type })
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
