<template lang="pug">
.row
  .on-left(
    v-for="(o, index) in options"
    :key="index"
    style="display: in-line; padding: 10px;"
    )
    q-btn.on-left(
      @click="deactivateOption({ option: o })"
      :color="o.color"
      :icon = "o.icon"
      v-show="o.value")
      span {{ o.label }}
      small.on-right(v-if="o.charge && o.charge.value > 0") {{ o.charge.value }}  {{ o.charge.currency }}
    q-btn.on-left(
      @click="activateOption({ option: o })"
      color="grey-7"
      :icon = "o.icon"
      v-show="!o.value"
      flat)
      span.light-paragraph {{ o.label }}
      small.on-right(v-if="o.charge && o.charge.value > 0") {{ o.charge.value }}  {{ o.charge.currency }}
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'options',
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('line', ['activateOption', 'deactivateOption'])
  },
  computed: {
    ...mapState('line', {
      options: state => state.line.options
    })
  },
  data () {
    return {
    }
  }
}
</script>
