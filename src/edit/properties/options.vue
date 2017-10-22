<template lang="pug">
.row.xs-gutter
  .row.full-width(v-if="family")
    .row.full-width
      small.text-grey-7
        span Opciones de familia {{ ' ' }}
        strong {{ family.properties.label }}
    .row.full-width
      q-chip(
        v-for="(o, index) in family.options"
        :key="index"
        :icon="o.icon"
        :color="o.color"
        style="margin:5px"
        square
        ) {{ o.label }}
        small.on-right(v-if="o.charge && o.charge.value > 0") {{ o.charge.value }}  EUR
  .row.full-width(v-if="group")
    .row.full-width
      small.text-grey-7
        span Opciones de grupo {{ ' ' }}
        strong {{ group.properties.label }}
    .row.full-width
      q-chip(
        v-for="(o, index) in group.options"
        :key="index"
        :icon="o.icon"
        :color="o.color"
        style="margin:5px"
        square
        ) {{ o.label }}
        small.on-right(v-if="o.charge && o.charge.value > 0") {{ o.charge.value }}  EUR
  .row.full-width(v-if="options")
    .row.full-width
      small.text-grey-7
        span Opciones propias de {{ ' ' }}
        strong {{ properties.label }}
    .row.full-width
      q-chip(
        v-for="(o, index) in options"
        :key="index"
        :icon="o.icon"
        :color="o.color"
        square
        style="margin:5px"
        @click="removeOption({ option: o })"
        ) {{ o.label }}
        small.on-right(v-if="o.charge && o.charge.value > 0") {{ o.charge.value }}  EUR
  .row.full-width(v-if="optionList")
    .row.full-width
      q-search(
        v-model="search"
        placeholder="Buscar opción..."
        color="secondary"
        inverted)
    .row.full-width
      small.text-grey-7
        span Opciones disponibles
    .row.full-width
      q-chip(
        v-for="(o, index) in availableOptions()"
        :key="index"
        :icon="o.properties.icon"
        color="grey-7"
        square
        style="margin:5px"
        @click="addOption({ option: o.properties })"
        v-show="showOption(o, options)"
        ) {{ o.properties.label }}
        small.on-right(v-if="o.properties && o.properties.charge && o.properties.charge.value > 0") {{ o.properties.charge.value }}  EUR
</template>

<script>
import {
  QModal,
  QModalLayout,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QField,
  QInput,
  QBtn,
  QIcon,
  QSearch,
  QChip
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'options',
  mounted () {
    this.fetch({ type: 'options' })
  },
  created () {
    this.handler = () => {
      this.$refs.optionsModal.open()
    }
    this.$q.events.$on('dbOptionsModal', this.handler)
  },
  beforeDestroy () {
    this.$q.events.$off('dbOptionsModal', this.handler)
  },
  components: {
    QModal,
    QModalLayout,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QField,
    QInput,
    QBtn,
    QIcon,
    QChip,
    QSearch
  },
  methods: {
    ...mapActions('productsDb', ['fetch', 'save']),
    ...mapActions('productsEdit', ['addOption', 'removeOption']),
    availableOptions () {
      let blockedOptions = []
      if (this.family && this.family.options) blockedOptions = [ ...blockedOptions, ...this.family.options ]
      if (this.group && this.group.options) blockedOptions = [ ...blockedOptions, ...this.group.options ]
      return this.optionList.filter((o) => {
        return !blockedOptions.some(b => b.id === o.id)
      })
    },
    showOption (o, options) {
      if (!options) return true
      return !options.some(i => i.id === o.id)
    }
  },
  computed: {
    ...mapState('productsDb', {
      optionList: state => state.options
    }),
    ...mapState('productsEdit', {
      properties: state => state.data.properties,
      options: state => state.data.options,
      family: state => state.inheritance.family,
      group: state => state.inheritance.group
    })
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
