<template lang="pug">
.row.full-width
  lines
  q-btn.fixed(
    style="bottom: 18px; left: 18px;"
    round
    color="green"
    icon="assignment turned in"
    @click="$router.push('./ticket')")
  q-btn.fixed(
    round
    color="primary"
    @click="$router.push('/products')"
    style="right: 18px; bottom: 18px"
    icon="add")
  options
</template>

<script>
import {
  QBtn
} from 'quasar'

import { mapActions } from 'vuex'

import Lines from './lines'
import Options from './options'

export default {
  name: 'order',
  mounted () {
    this.setNavigation({ prev: { icon: 'add', route: './products' } })
  },
  components: {
    QBtn,
    Lines,
    Options
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
