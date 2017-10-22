<template lang="pug">
.row.content-between.justify-between.items-center.sm-gutter
  .on-left(v-for="(f,index) in familiesbyCollection(collection)")
    q-btn(
      v-if="f.id!=family.id"
      :color="f.properties.color"
      :key="index"
      @click="select({ family: f, type: 'families' })")
      q-icon.on-left(:name="f.properties.icon")
      .uppercase {{ f.properties.label }}
    q-btn(
      v-else
      flat
      :color="f.properties.color"
      :key="index"
      @click="select({ family: f, type: 'families' })")
      q-icon.on-left(:name="f.properties.icon")
      .uppercase {{ f.properties.label }}
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'families',
  props: [ 'collection' ],
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('products', ['fetch', 'setFamily']),
    select ({ family, type }) {
      this.setFamily({ family }).then(() => {
        this.fetch({ type: 'groups', family: family.id })
        this.fetch({ type: 'products', family: family.id })
      })
    }
  },
  computed: {
    ...mapState('products', {
      families: state => state.families,
      family: state => state.family
    }),
    ...mapGetters('products', [
      'familiesbyCollection'
    ])
  }
}
</script>
