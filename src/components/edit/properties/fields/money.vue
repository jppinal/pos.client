<template lang="pug">
.row.full-width(v-show="properties.hasOwnProperty(field)")
  .row.full-width
    q-field.full-width(
      v-show="properties.hasOwnProperty(field)"
      :helper="helper")
      q-input(
        :suffix="properties[field].currency"
        align="right"
        v-model="properties[field].value"
        :float-label="label"
        v-if="properties[field]"
        color="pink"
        type="number")
  .row.full-width
    q-field.full-width(
      v-show="properties.hasOwnProperty('taxes')"
      :helper="getTax(properties[field], properties['taxes'])")
      q-input(
        suffix="%"
        align="right"
        v-model="properties['taxes']"
        float-label="IVA (%)"
        type="number"
        color="pink")
</template>

<script>
import {
  QField,
  QInput
} from 'quasar'

import { mapState } from 'vuex'

export default {
  name: 'field-money',
  props: [
    'label', 'field', 'color', 'helper', 'count'
  ],
  mounted () {
  },
  components: {
    QField,
    QInput
  },
  methods: {
    getTax (price, taxes) {
      if (!price) return 'IVA aplicado sobre importe'
      let notax = price.value / (1 + taxes / 100)
      let tax = price.value - notax
      return `IVA aplicado sobre importe. IVA: ${Number(tax).toFixed(2)} ${price.currency}. Sin IVA: (${Number(notax).toFixed(2)} ${price.currency}).`
    }
  },
  computed: {
    ...mapState('edit', {
      properties: state => state.data.properties
    })
  },
  data () {
    return {
    }
  }
}
</script>
