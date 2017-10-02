<template lang="pug">
.col(style="overflow: hidden;")
  lines(style="overflow: auto;padding: 150px 0px 60px 0px;")
  actions.full-width.fixed(style="top:50px")
</template>

<script>
import Lines from './../components/ticket/lines'
import Actions from './../components/ticket/actions'

export default {
  name: 'mobile-ticket',
  components: {
    Lines,
    Actions
  }
}

</script>
