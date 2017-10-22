<template lang="pug">
.row.content-between.justify-between.items-center.sm-gutter(v-if="collection")
  .on-left(v-for="(f,index) in familiesbyCollection(collection)")
    q-btn(
      :color="f.properties.color"
      :key="index"
      @click="select({ family: f, type: 'families' })")
      q-icon.on-left(:name="f.properties.icon")
      .uppercase {{ f.properties.label }}
  .on-left
    q-btn(
      style="padding: 10px; margin: 5px"
      icon="add"
      color="pink"
      @click="empty({ type: 'families', body: { collection } })"
      round
      small)
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'families',
  props: [ 'collection' ],
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('productsDb', ['fetch', 'setFamily']),
    ...mapActions('productsEdit', ['empty', 'edit']),
    select ({ family, type }) {
      this.setFamily({ family }).then(() => {
        this.fetch({ type: 'groups', body: { family: family.id } })
        this.fetch({ type: 'products', body: { family: family.id } })
      })
      this.edit({ body: { id: family.id }, type })
    }
  },
  computed: {
    ...mapGetters('productsDb', [
      'familiesbyCollection'
    ])
  }
}
</script>
