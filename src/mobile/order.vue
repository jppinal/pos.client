<template lang="pug">
.row.full-width
  lines
  actions
  options
</template>

<script>
import { mapActions } from 'vuex'

import Lines from './../components/order/lines'
import Options from './../components/order/options'
import Actions from './../components/order/actions'

export default {
  name: 'mobile-order',
  mounted () {
    this.setNavigation({ prev: { icon: 'add', route: './products' } })
  },
  components: {
    Lines,
    Options,
    Actions
  },
  methods: {
    ...mapActions('order', ['addLine', 'updateLine', 'removeLine']),
    ...mapActions('nav', ['setNavigation'])
  },
  computed: {
  },
  data () {
    return {}
  }
}
</script>
