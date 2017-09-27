<template lang="pug">
.row(align="justify" inverted two-lines)
  q-btn(
    v-for="(f,index) in families"
    :color="f.properties.color"
    style="padding: 10px; margin: 5px"
    :key="index"
    @click="select({ id: f.id, type: 'families' })")
    q-icon.on-left(:name="f.properties.icon")
    .uppercase {{ f.properties.label }}
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

import { mapActions, mapState } from 'vuex'

export default {
  name: 'families',
  mounted () {
    // this.fetch({ type: 'families', body: { collection_id: this.collection.id } })
  },
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('products', ['fetchOne', 'fetch', 'fetchArray']),
    ...mapActions('edit', ['empty', 'setData']),
    select ({ id, type }) {
      this.fetchOne({ id, type }).then((resolve) => {
        this.fetch({ type: 'groups', body: { family_id: id } }).then((response) => {
          this.fetchArray({ type: 'groups', array: this.groups })
        })
        this.setData({ data: this.family, type })
      })
    }
  },
  computed: {
    ...mapState('products', {
      families: state => state.families,
      family: state => state.family,
      groups: state => state.groups,
      collection: state => state.collection
    })
  }
}
</script>
