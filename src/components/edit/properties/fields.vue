<template lang="pug">
.row
  field-text.full-width(
    field="label"
    label="Etiqueta"
    helper="Texto que se mostrará en el programa"
    :count="50")
  field-icon.full-width(
    field="icon"
    label="Icono"
    helper="Icono que se mostrará en el programa")
  field-color.full-width(
    field="color"
    label="Color"
    helper="Color que se mostrará en el programa")
  q-field.full-width(
    v-show="hasProperty('css')"
    helper="Estilo que se mostrará en el programa")
    q-input(
      v-model="properties.css"
      float-label="Estilo"
      :color="fieldsColor"
      clearable)
  field-text.full-width(
    field="ticket"
    label="Texto para Ticket"
    helper="Texto que se mostrará en el ticket"
    :count="50")
  field-text.full-width(
    field="kitchen"
    label="Texto para Cocina"
    helper="Texto que se mostrará en las comandas para cocina/barra"
    :count="50")
  field-money.full-width(
    field="price"
    label="Precio"
    helper="Precio a cobrar por unidad, con IVA")
  field-money.full-width(
    field="charge"
    label="Importe"
    helper="Importe a anyadir sobre precio de producto, con IVA")
</template>

<script>
import {
  QField,
  QInput,
  Events
} from 'quasar'

import { mapState } from 'vuex'

import FieldText from './fields/text'
import FieldIcon from './fields/icon'
import FieldColor from './fields/color'
import FieldMoney from './fields/money'

export default {
  name: 'fields',
  mounted () {
  },
  components: {
    QField,
    QInput,
    FieldText,
    FieldIcon,
    FieldColor,
    FieldMoney
  },
  methods: {
    openColorsModal () {
      Events.$emit('editColorsModal')
    },
    hasProperty (prop) {
      return this.properties.hasOwnProperty(prop)
    }
  },
  computed: {
    ...mapState('edit', {
      properties: state => state.data.properties
    })
  },
  data () {
    return {
      fieldsColor: 'pink'
    }
  }
}
</script>
