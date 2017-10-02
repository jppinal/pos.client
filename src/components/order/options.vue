<template lang="pug">
q-modal(
  ref="optionsModal"
  maximized
  content-classes="bg-light"
  @close="onClose"
  @open="onOpen"
  )
  q-modal-layout
    .col.layout-padding
      .row.full-width.items-center
        q-icon(:name="newline.icon" :color="newline.color" size="42px")
        .on-right
          big.uppercase.text-center {{ newline.ticket }}
          big.on-right.uppercase.thin-paragraph {{ newline.price.value }}  EUR
      .row.full-width.items-center
        q-btn(
          flat
          color="red-5"
          @click="removeMe()"
          icon="delete sweep")
          span Borrar
      .row.full-width.layout-padding
        .on-left(
          v-for="(o, index) in options"
          :key="o.name"
          style="display: in-line; padding: 10px;"
          )
          q-btn.on-left(
            @click="removeOption({ key: o.name, value: o, index })"
            :color="o.color"
            :icon = "o.icon"
            v-show="optionState(o.name)")
            span {{ o.label }}
            small.on-right(v-if="o.charge") {{ o.charge.value }}  EUR
          q-btn.on-left(
            @click="addOption({ key: o.name, value: o, index })"
            color="grey-7"
            :icon = "o.icon"
            v-show="!optionState(o.name)"
            flat)
            span.light-paragraph {{ o.label }}
            small.on-right(v-if="o.charge") {{ o.charge.value }}  EUR
      .row.full-width.items-center
        .col-sm-3
          .row.full-width.text-grey-7
            big.thin-paragraph UNIDADES
            big.on-right {{ newline.quantity.value }}
        .col
          .row.full-width.shadow-2
            .col
              q-btn.full-width(color="pink" style="height: 50px;" key="C" @click="resetQuantity({ quantity: newline.quantity })")
                big.light-paragraph C
            .col(v-for="m in keypad")
              q-btn.full-width(color="grey-6" flat style="height: 50px;" :key="m" @click="changeQuantity({ quantity: newline.quantity, n: m })")
                big.light-paragraph {{ m }}
  div(style="left: 18px; bottom: 18px; position: fixed;")
    q-btn(
      outline
      color="red"
      style="height: 125px"
      @click="$refs.optionsModal.close()"
      )
      span Cancelar
  div(style="right: 18px; bottom: 18px; position: fixed;")
    .row
      .on-left.text-right.xs-hide
        .uppercase
          span {{ newline.quantity.value }} {{ newline.ticket }}
          small.light-paragraph.on-right {{ newline.total.value }}  EUR
        .uppercase(v-for="o in newline.options")
          small.text-grey-7 {{ o.value.label }}
      q-btn(
        color="secondary"
        style="height: 125px"
        @click="addNewLine"
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

export default {
  name: 'options',
  created () {
    this.handler = ({ action }) => {
      this.setAction({ action }).then((resolve) => {
        this.$refs.optionsModal.open()
      })
    }
    this.$q.events.$on('openOptionsModal', this.handler)
  },
  beforeDestroy () {
    this.$q.events.$off('openOptionsModal', this.handler)
  },
  components: {
    QBtn,
    QIcon,
    QModal,
    QModalLayout
  },
  methods: {
    ...mapActions('line', ['addOption', 'removeOption', 'addToQuantity', 'resetQuantity', 'setQuantity', 'setAction']),
    ...mapActions('order', ['addLine', 'updateLine', 'removeLine']),
    saveLine () {
      this.updateLine({ line: this.newline, index: this.lineIndex }).then((resolve) => {
        this.$refs.optionsModal.close()
      })
    },
    addNewLine () {
      this.addLine({ line: this.newline }).then((resolve) => {
        this.$refs.optionsModal.close()
      })
    },
    removeMe () {
      this.removeLine({ index: this.lineIndex }).then((resolve) => {
        this.$refs.optionsModal.close()
      })
    },
    changeQuantity ({ quantity, n }) {
      if (this.overwriteQuantity) {
        this.overwriteQuantity = false
        this.setQuantity({ quantity, n })
      }
      else {
        this.addToQuantity({ quantity, n })
      }
    },
    onClose () {
      this.overwriteQuantity = true
    },
    onOpen () {
      this.overwriteQuantity = true
    }
  },
  computed: {
    ...mapState('products', {
      options: state => state.productOptions
    }),
    ...mapState('line', {
      newline: state => state.line,
      action: state => state.action
    }),
    ...mapState('order', {
      lineIndex: state => state.index
    }),
    ...mapGetters('line', ['optionState'])
  },
  data () {
    return {
      keypad: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      overwriteQuantity: true
    }
  }
}
</script>
