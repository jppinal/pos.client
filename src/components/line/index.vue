<template lang="pug">
q-modal(
  ref="lineModal"
  content-classes="bg-light"
  @close="onClose"
  @open="onOpen"
  maximized
  )
  q-modal-layout
    .col.layout-padding
      .row.full-width.items-center
        big.uppercase.text-center {{ line.ticket }}
        .on-right.uppercase.thin-paragraph {{ line.price.value }}  {{ line.price.currency }}
      .row.full-width.layout-padding
        options
      .row.full-width.items-center
        quantity
  div(style="left: 18px; bottom: 18px; position: fixed;")
    q-btn(
      outline
      color="red"
      style="height: 125px"
      @click="$refs.lineModal.close()"
      )
      span Cancelar
  div(style="right: 18px; bottom: 18px; position: fixed;")
    .row
      .on-left.text-right
        .uppercase
          span {{ line.quantity.value }} {{ line.ticket }}
          small.light-paragraph.on-right {{ line.total.value }}  {{ line.total.currency }}
        .uppercase(v-for="o in activeOptions()")
          small.text-grey-7 {{ o.label }}
      q-btn(
        color="secondary"
        style="height: 125px"
        @click="newLine"
        v-if="action==='create'"
        )
        span Anyadir
      q-btn(
        color="pink"
        style="height: 125px"
        @click="saveLine"
        v-else
        )
        span Guardar
</template>

<script>
import {
  QBtn,
  QIcon,
  QModal,
  QModalLayout
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

import Quantity from './quantity'
import Options from './options'

export default {
  name: 'z-line',
  created () {
    this.handler = ({ action }) => {
      this.setAction({ action }).then((resolve) => {
        this.$refs.lineModal.open()
      })
    }
    this.$q.events.$on('openLineModal', this.handler)
  },
  beforeDestroy () {
    this.$q.events.$off('openLineModal', this.handler)
  },
  components: {
    QBtn,
    QIcon,
    QModal,
    QModalLayout,
    Quantity,
    Options
  },
  methods: {
    ...mapActions('line', ['setAction', 'resetOverwrite']),
    ...mapActions('order', ['addLine', 'updateLine', 'removeLine']),
    saveLine () {
      this.updateLine({ line: this.line }).then((resolve) => {
        this.$refs.lineModal.close()
      })
    },
    newLine () {
      this.addLine({ line: this.line }).then((resolve) => {
        this.$refs.lineModal.close()
      })
    },
    onOpen () {
      this.resetOverwrite()
    },
    onClose () {

    }
  },
  computed: {
    ...mapState('line', {
      line: state => state.line,
      action: state => state.action
    }),
    ...mapGetters('line', [ 'activeOptions' ])
  },
  data () {
    return {
    }
  }
}
</script>
