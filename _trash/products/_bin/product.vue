<template lang="pug">
.row
  .col-sm-6
    q-list
      q-item(v-for="(p,index) in products"  :key="index"
      @click="select({ id: p.id })")
        q-item-main
          span {{ p.properties.label }}
          span.text-grey-7.on-right
            q-icon(name="print")
            small.on-right {{ p.properties.ticket }}
            q-icon.on-right(name="assignment")
            small.on-right {{ p.properties.kitchen }}
        q-item-side
          q-btn(small round :color="p.properties.color")
            q-icon(:name="p.properties.icon")
  .col-sm-6
    q-field(
    label="Nombre"
    helper="Nombre interno del producto, no debe contener espacios, números o signos"
    :count="50")
      q-input(v-model="properties.name")
    q-field(
    label="Etiqueta"
    helper="Etiqueta del producto, texto que se mostrará en el programa"
    :count="50")
      q-input(v-model="properties.label")
    q-field(
    label="Icono"
    helper="Icono que se mostrará en el programa"
    :count="50")
      q-input(v-model="properties.icon")
    q-field(
    label="Color"
    helper="Color que se mostrará en el programa"
    :count="50")
      q-input(v-model="properties.color")
    q-field(
    label="Texto para ticket"
    helper="Texto que se mostrará en el ticket"
    :count="50")
      q-input(v-model="properties.ticket")
    q-field(
    label="Texto para cocina"
    helper="Texto que se mostrará en las comandas para cocina/barra"
    :count="50")
      q-input(v-model="properties.kitchen")
    q-field(
    label="Precio por unidad"
    helper="Precio a cobrar por unidad, sin IVA"
    :count="50")
      q-input(:suffix="properties.price.currency" v-model="properties.price.value")
    q-field(
    label="Tipo de IVA"
    helper="IVA a aplicar al producto"
    :count="50")
      q-input(v-model="properties.tax")
    q-field()
    q-select(
      multiple
      toggle
      v-model="options"
      :options="getOptionsAsSelect()")
    q-btn(@click="saveProduct({ properties, options, id })") Guardar
</template>

<script>
import {
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QField,
  QInput,
  QBtn,
  QIcon,
  QSelect
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'products',
  mounted () {
    this.fetchProducts()
    this.fetchOptions()
  },
  components: {
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QField,
    QInput,
    QBtn,
    QIcon,
    QSelect
  },
  methods: {
    ...mapActions('db', ['fetchOptions', 'fetchProducts', 'fetchProduct', 'saveProduct']),
    select ({ id }) {
      this.fetchProduct({ id }).then((resolve) => {
        console.log(resolve)
        this.properties = Object.assign({}, this.product.properties)
        this.options = Object.assign({}, this.product.has_option)
        this.id = this.product.id
      })
    }
  },
  computed: {
    ...mapState('db', {
      products: state => state.products,
      optionsList: state => state.options,
      product: state => state.product
    }),
    ...mapGetters('db', ['getOptionsAsSelect'])
  },
  data () {
    return {
      properties: {
        name: '',
        label: '',
        icon: '',
        color: '',
        ticket: '',
        kitchen: '',
        price: {
          value: 0,
          currency: 'EUR'
        },
        tax: ''
      },
      options: [],
      id: undefined
    }
  }
}
</script>
