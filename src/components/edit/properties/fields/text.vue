<template lang="pug">
q-field.full-width(
  v-show="properties.hasOwnProperty(field)"
  :helper="helper"
  :count="count")
  q-input(
    v-model="properties[field]"
    :float-label="label"
    type="text"
    color="pink"
    clearable)
</template>

<script>
import {
  QField,
  QInput
} from 'quasar'

import { mapState } from 'vuex'

export default {
  name: 'field-text',
  props: [
    'label', 'field', 'color', 'helper', 'count'
  ],
  mounted () {
  },
  components: {
    QField,
    QInput
  },
  methods: {
  },
  computed: {
    ...mapState('edit', {
      properties: state => state.data.properties
    })
  },
  data () {
    return {
    }
  }
}
</script>
