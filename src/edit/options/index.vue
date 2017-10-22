<template lang="pug">
.row.absolute-top-left.fit.bg-grey-3(style="overflow: hidden;")
  .col-4.fit.bg-teal-2.relative-position.full-width.full-height(style="overflow: auto;")
    properties
  .col.layout-padding.xs-gutter
    .row.full-width
      big.text-grey-7.thin-paragraph.uppercase Opciones
    .row.full-width
      q-search(
        v-model="search"
        placeholder="Buscar opción..."
        color="secondary"
        inverted)
    .row.full-width
      q-btn(
        small
        round
        color="pink"
        icon="add"
        style="margin:8px"
        @click="newOption()")
      q-btn(
        v-for="(o, index) in options"
        :key="index"
        :icon="o.properties.icon"
        :color="o.properties.color"
        style="margin:8px"
        square
        @click="select({ id: o.id, type:'options' })")
        span {{ o.properties.label }}
        small.on-right(v-if="o.properties.charge.value > 0") {{ o.properties.charge.value }}  EUR
</template>

<script>
import {
  QBtn,
  QSearch
} from 'quasar'

import { mapActions, mapState } from 'vuex'

import Properties from '../properties/index'

export default {
  name: 'options',
  mounted () {

  },
  components: {
    QBtn,
    QSearch,
    Properties
  },
  created () {
    this.empty({ type: 'options' })
    this.fetch({ type: 'options' })
    this.oHandler = () => {
      this.fetch({ type: 'options' })
    }
    this.$q.events.$on('options', this.oHandler)
  },
  beforeDestroy () {
    this.$q.events.$off('options', this.oHandler)
  },
  methods: {
    ...mapActions('productsDb', ['fetch', 'fetchOne', 'save']),
    ...mapActions('productsEdit', ['empty', 'edit']),
    newOption () {
      this.empty({ type: 'options' })
    },
    select ({ id, type }) {
      this.edit({ body: { id }, type })
    }
  },
  computed: {
    ...mapState('productsDb', {
      option: state => state.option,
      options: state => state.options
    })
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
