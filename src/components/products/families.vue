<template lang="pug">
.row(align="justify" inverted two-lines)
  .on-left(v-for="(f,index) in families")
    q-btn(
      v-if="f.id!=family.id"
      :color="f.properties.color"
      :key="index"
      @click="select({ id: f.id, type: 'families' })")
      q-icon.on-left(:name="f.properties.icon")
      .uppercase {{ f.properties.label }}
    q-btn(
      v-else
      flat
      :color="f.properties.color"
      :key="index"
      @click="select({ id: f.id, type: 'families' })")
      q-icon.on-left(:name="f.properties.icon")
      .uppercase {{ f.properties.label }}
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'families',
  components: {
    QBtn,
    QIcon
  },
  created () {
    this.fetch({ type: 'collections' })
  },
  methods: {
    ...mapActions('products', ['fetchOne', 'fetch', 'fetchArray']),
    select ({ id, type }) {
      this.fetchOne({ id, type }).then((resolve) => {
        this.fetch({ type: 'groups', body: { family_id: id } }).then((response) => {
          this.fetchArray({ type: 'groups', array: this.groups })
        })
      })
    }
  },
  computed: {
    ...mapState('products', {
      families: state => state.families,
      family: state => state.family,
      groups: state => state.groups
    })
  }
}
</script>
