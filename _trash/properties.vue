<template lang="pug">
.col.layout-padding
  q-field.full-width(
  helper="Etiqueta de la propiedad, texto que se mostrará en el programa"
  :count="50")
    q-input(
      v-model="properties.label"
      float-label="Etiqueta"
      type="text")
  q-field.full-width(
  helper="Icono que se mostrará en el programa")
    q-input(
      v-model="properties.icon"
      float-label="Icono")
  q-field(
  helper="Color que se mostrará en el programa cuando la opción esté activa")
    q-input(
      v-model="properties.color"
      float-label="Color")
  q-field(
  helper="Texto que se mostrará en el ticket"
  :count="50")
    q-input(
      v-model="properties.ticket"
      float-label="Texto para ticket")
  q-field(
  helper="Texto que se mostrará en las comandas para cocina/barra"
  :count="50")
    q-input(
      v-model="properties.kitchen"
      float-label="Texto para cocina")
  q-btn.fixed(color="secondary"
    @click="saveData({ body, type: 'options' })"
    style="bottom: 18px; left: 18px;"
    round
    icon="check")
  q-btn.fixed(
    color="red"
    @click="deleteData({ id, type: 'options' })"
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
  QBtn,
  QIcon,
  QDialogSelect,
  QFab,
  QFabAction,
  QTooltip,
  QModal,
  QModalLayout,
  Events
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'properties',
  mounted () {
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
    QDialogSelect,
    QFab,
    QFabAction,
    QModal,
    QModalLayout,
    QTooltip
  },
  methods: {
    ...mapActions('products', ['save', 'fetch', 'deleteOne']),
    ...mapActions('edit', ['empty']),
    saveData ({ body, type }) {
      this.save({ body, type }).then((resolve) => {
        Events.$emit('options')
        this.empty()
      })
    },
    deleteData ({ id, type }) {
      this.deleteOne({ id, type }).then((resolve) => {
        Events.$emit('options')
      })
    }
  },
  computed: {
    ...mapState('edit', {
      body: state => state.data,
      id: state => state.data.id,
      properties: state => state.data.properties
    })
  },
  data () {
    return {

    }
  }
}
</script>
