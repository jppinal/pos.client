<template lang="pug">
.row.fit
  .col-3
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
</template>

<script>
import {
  QBtn
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'quantity',
  components: {
    QBtn
  },
  methods: {
    ...mapActions('line', ['addToQuantity', 'resetQuantity', 'setQuantity']),
    changeQuantity ({ quantity, n }) {
      if (this.overwrite) {
        this.setQuantity({ quantity, n })
      }
      else {
        this.addToQuantity({ quantity, n })
      }
    }
  },
  computed: {
    ...mapState('line', {
      newline: state => state.line,
      overwrite: state => state.overwrite
    })
  },
  data () {
    return {
      keypad: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  }
}
</script>
