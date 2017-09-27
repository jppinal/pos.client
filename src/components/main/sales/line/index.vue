<template lang="pug">
q-modal(
  ref="lineModal"
  maximized
  content-classes="bg-light"
  @close="onClose"
  @open="onOpen"
  )
  q-modal-layout
    .col.layout-padding
      .row.full-width.items-center
          q-icon(:name="line.icon" :color="line.color" size="42px")
          .on-right
            big.uppercase.text-center {{ line.ticket }}
            big.on-right.uppercase.thin-paragraph {{ line.price.value }}  EUR
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
          small.light-paragraph.on-right {{ line.total.value }}  EUR
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
    ...mapActions('salesLine', ['setAction', 'resetOverwrite']),
    ...mapActions('salesTicket', ['addLine', 'updateLine', 'removeLine']),
    saveLine () {
      this.updateLine({ line: this.line, index: this.lineIndex }).then((resolve) => {
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
    ...mapState('salesLine', {
      line: state => state.line,
      action: state => state.action
    }),
    ...mapState('salesTicket', {
      lineIndex: state => state.index
    }),
    ...mapGetters('salesLine', [ 'activeOptions' ])
  },
  data () {
    return {
    }
  }
}
</script>
