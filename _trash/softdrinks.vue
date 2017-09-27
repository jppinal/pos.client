<template lang="pug">
.col.full-width
  .col.shadow-2
    .row(
      v-for=("g in groups")
      :key="g.label"
      :class="g.class"
      style="padding: 10px;"
      )
      .col-3
        q-btn(:icon="g.icon" flat disable) {{ g.label }}
      .col-9
        q-btn.on-left(
          v-for="p in g.products"
          flat
          :key="p.label"
          :class="p.class"
          @click="setNewLine({ product: p, options: [...g.options, ...p.options] })")
          span {{ p.label }}
          small.on-right(v-if="p.price") {{ p.price.value }} {{ p.price.currency }}
  q-modal(
    ref="optionsModal"
    maximized
    content-classes="bg-light"
    )
    q-modal-layout
      .col.layout-padding
        .row.full-width.items-center
            q-icon(:name="icon" :color="color" size="42px")
            .on-right
              big.uppercase.text-center {{ newline.ticket }}
              big.on-right.uppercase.thin-paragraph {{ newline.price.value }}  EUR
        .row.full-width.layout-padding
          .on-left(
            v-for="(o, index) in options"
            :key="o.name"
            style="display: in-line; padding: 10px;"
            )
            q-btn.on-left(
              @click="removeNewOptionLine({ key: o.name, value: o, index })"
              :color="o.color"
              :icon = "o.icon"
              v-show="optionState(o.name)")
              span {{ o.label }}
              small.on-right(v-if="o.charge") {{ o.charge.value }}  EUR
            q-btn.on-left(
              @click="addNewOptionLine({ key: o.name, value: o, index })"
              color="grey-7"
              :icon = "o.icon"
              v-show="!optionState(o.name)"
              flat)
              span.light-paragraph {{ o.label }}
              small.on-right(v-if="o.charge") {{ o.charge.value }}  EUR
        .row.full-width.items-center
          .col-3
            .row.full-width.text-grey-7
              big.thin-paragraph UNIDADES
              big.on-right {{ newline.quantity.value }}
          .col
            .row.full-width.shadow-2
              .col
                q-btn.full-width(color="pink" style="height: 50px;" key="C" @click="keypadAction('C')")
                  big.light-paragraph C
              .col(v-for="m in keypad")
                q-btn.full-width(color="grey-6" flat style="height: 50px;" :key="m" @click="keypadAction(m)")
                  big.light-paragraph {{ m }}
      q-fixed-position(corner="bottom-left" :offset="[18, 18]")
        q-btn(
          outline
          color="red"
          style="height: 125px"
          @click="$refs.optionsModal.close()"
          )
          span Cancelar
      div(style="right: 18px; bottom: 18px; position: fixed;")
        .row
          .on-left.text-right
            .uppercase
              span {{ newline.quantity.value }} {{ newline.ticket }}
              small.light-paragraph.on-right {{ newline.total.value }}  EUR
            .uppercase(v-for="o in newline.options")
              small.text-grey-7 {{ o.value.label }}
          q-btn(
            color="secondary"
            style="height: 125px"
            @click="addNewLine"
            )
            span(v-if="action===new") Anyadir
          q-btn(
            color="secondary"
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
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QCard,
  QCardMain,
  QCardActions,
  QCardSeparator,
  QModal,
  QModalLayout,
  QToggle,
  QCheckbox,
  QFixedPosition
} from 'quasar'

var data = require('./coffees.json')
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QCard,
    QCardMain,
    QCardActions,
    QCardSeparator,
    QModal,
    QModalLayout,
    QToggle,
    QCheckbox,
    QFixedPosition
  },
  methods: {
    ...mapActions('sales', ['setLine', 'setLineOptions', 'clearLine', 'addLine', 'addOptionLine', 'removeOptionLine']),
    setNewLine ({ product, options }) {
      this.optionState = []
      this.clearLine().then((resolve) => {
        this.setLine({ label: product.label, price: product.price, ticket: product.ticket, kitchen: product.kitchen, icon: this.icon, color: this.color }).then((resolve) => {
          this.setLineOptions({ options }).then((resolve) => {
            this.$refs.optionsModal.open()
          })
        })
      })
    },
    openOptionsModal () {
      this.$refs.optionsModal.open()
    },
    keypadAction (n) {
      var quantity = {}
      if (n === 'C') {
        quantity = { value: '', unit: 'unidad' }
      }
      else {
        let m = 0
        if (this.newline.quantity.value) m = this.newline.quantity.value * 10
        quantity = { value: m + n, unit: 'unidad' }
      }
      this.setLine({ quantity })
    },
    addNewLine () {
      this.addLine({ line: this.newline }).then((resolve) => {
        this.$refs.optionsModal.close()
      })
    },
    removeNewOptionLine ({ key, value, index }) {
      this.removeOptionLine({ key }).then((resolve) => {

      })
    },
    addNewOptionLine ({ key, value, index }) {
      this.addOptionLine({ key, value }).then((resolve) => {

      })
    }
  },
  computed: {
    ...mapState('sales', {
      options: state => state.options,
      newline: state => state.line
    }),
    ...mapGetters('sales', ['lineOptions', 'optionState'])
  },
  data () {
    return {
      ...data,
      keypad: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  }
}
</script>
