<template lang="pug">
.col(style="overflow: hidden;")
  lines(style="overflow: auto;padding: 150px 0px 60px 0px;")
  actions.full-width.fixed(style="top:50px")
</template>

<script>
import Lines from './../components/bill/index'
import Actions from './../components/bill/actions'

export default {
  name: 'mobile-ticket',
  components: {
    Lines,
    Actions
  }
}

</script>
