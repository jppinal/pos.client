<template lang="pug">
.row.full-width
  q-btn.fixed(
    style="bottom: 18px; left: 18px;"
    round
    color="green"
    icon="assignment turned in"
    @click="$router.push('/ticket')")
  q-btn.fixed(
    round
    color="primary"
    @click="$router.push('/products')"
    style="right: 18px; bottom: 18px"
    icon="add")
</template>

<script>
import {
  QBtn
} from 'quasar'

export default {
  name: 'actions',
  mounted () {

  },
  components: {
    QBtn
  },
  computed: {
  },
  data () {
    return {}
  }
}
</script>
