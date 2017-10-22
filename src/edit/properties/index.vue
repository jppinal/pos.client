<template lang="pug">
.col.layout-padding(v-if="!properties")
  span Seleccionar un objeto para editar
.col.layout-padding(v-else)
  .row
    span.text-grey-10.uppercase.thin-paragraph
      span.on-left(v-show="id")
        strong {{ properties.label }}
      span Propiedades
    fields
  .row(v-if="hasOptions(type)")
    span.text-grey-10.uppercase.thin-paragraph(style="margin-top: 50px")
      span.on-left(v-show="id")
        strong {{ properties.label }}
      span Opciones
    options
  q-btn.fixed(color="secondary"
    @click="saveData({ body, type })"
    style="bottom: 18px; left: 18px;"
    round
    icon="check")
  q-btn.fixed(
    color="red"
    @click="deleteData({ id, type })"
    round
    small
    icon="delete sweep"
    v-show="id"
    style="bottom: 78px; left: 10px")
</template>

<script>
import {
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QField,
  QInput,
  QRadio,
  QBtn,
  QIcon,
  QDialogSelect,
  QFab,
  QFabAction,
  QTooltip,
  QModal,
  Events
} from 'quasar'

import { mapActions, mapState } from 'vuex'

import Fields from './fields'
import Options from './options'

export default {
  name: 'properties',
  mounted () {
    this.clear()
  },
  components: {
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QField,
    QInput,
    QRadio,
    QBtn,
    QIcon,
    QDialogSelect,
    QFab,
    QFabAction,
    QTooltip,
    QModal,
    Fields,
    Options
  },
  methods: {
    ...mapActions('productsDb', ['save', 'deleteOne']),
    ...mapActions('productsEdit', ['clear']),
    saveData ({ body, type }) {
      this.save({ body, type }).then((resolve) => {
        Events.$emit(type, body)
        this.clear()
      })
    },
    deleteData ({ id, type }) {
      this.deleteOne({ id, type }).then((resolve) => {
        Events.$emit(type)
        this.clear()
      })
    },
    translateType (type) {
      if (type === 'products') return 'Producto'
      if (type === 'groups') return 'Grupo'
      if (type === 'families') return 'Familia'
      if (type === 'collections') return 'Colección'
      return type
    },
    hasOptions (type) {
      return type === 'families' || type === 'groups' || type === 'products'
    }
  },
  computed: {
    ...mapState('productsEdit', {
      body: state => state.data,
      id: state => state.data.id,
      properties: state => state.data.properties,
      options: state => state.data.options,
      type: state => state.type
    })
  },
  data () {
    return {
    }
  }
}
</script>
