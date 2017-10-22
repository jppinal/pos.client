<template lang="pug">
q-field.full-width(
  v-show="properties.hasOwnProperty(field)"
  :helper="helper")
  .row.xs-gutter
    .col-10
      q-input(
        v-model="properties[field]"
        :float-label="label"
        color="pink"
        clearable)
    .col-2
      q-btn(@click="$refs.iconModal.open()" round small :icon="properties[field]" color="teal-4")
  q-modal(
    ref="iconModal"
    content-classes="bg-teal-2"
    maximized
    )
    table.fit
      tbody.fit
        tr(v-for="(pallete,index) in palletes")
          td(v-for="(color,index) in getPallete(pallete)")
            q-btn.full-width(
              @click="changeColor(color)"
              :color="color"
              no-caps
              small)
              small {{ color }}
</template>

<script>
import {
  QField,
  QInput,
  QBtn,
  QModal
} from 'quasar'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'field-color',
  props: [
    'label', 'field', 'color', 'helper'
  ],
  mounted () {
  },
  components: {
    QField,
    QInput,
    QBtn,
    QModal
  },
  methods: {
    ...mapActions('productsEdit', ['setColor']),
    changeColor (color) {
      this.setColor({ color })
      this.$refs.iconModal.close()
    },
    getPallete (pallete) {
      var colors = [pallete]
      for (var i = 1; i <= 14; i++) {
        colors.push(pallete + '-' + i)
      }
      if (pallete === 'white&black') {
        colors = ['white', 'black']
      }
      return colors
    }
  },
  computed: {
    ...mapState('productsEdit', {
      properties: state => state.data.properties
    })
  },
  data () {
    return {
      palletes: [
        'red',
        'deep-orange',
        'orange',
        'amber',
        'yellow',
        'lime',
        'light-green',
        'green',
        'teal',
        'cyan',
        'light-blue',
        'blue',
        'indigo',
        'deep-purple',
        'purple',
        'pink',
        'grey',
        'blue-grey',
        'brown'
      ]
    }
  }
}
</script>
