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
      q-btn(@click="$refs.colorsModal.open()" round small :color="properties[field]")
  q-modal(
    ref="colorsModal"
    content-classes="bg-dark"
    position="bottom"
    )
    .row.fit
      q-tabs(color="dark" align="justify" no-pane-border)
        q-tab(v-for="(group,index) in palletes"
          slot="title"
          :name="group.label"
          :key="index"
          :default="index===0"
          two-lines)
          .row
            q-icon(
              name="fiber manual record"
              :color="c"
              v-for="(c,index) in group.colors"
              :key="index")
        q-tab-pane(
          v-for="(group,index) in palletes"
          :key="index"
          :name="group.label")
          .row.items-center.justify-between(v-for="(pallete,index) in group.colors")
            q-btn(
              v-for="(color,index) in getColors(pallete)"
              :key="index"
              style="padding: 15px; margin: 10px"
              @click="changeColor(color)"
              :color="color"
              :icon="isSelected(properties[field], color)"
              round)
              q-tooltip.bg-teal-2.text-black
                small {{ color }}
      .row.justify(style="padding: 20px")
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane,
  QField,
  QInput,
  QBtn,
  QIcon,
  QTooltip,
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
    QTabs,
    QTab,
    QTabPane,
    QField,
    QInput,
    QBtn,
    QIcon,
    QTooltip,
    QModal
  },
  methods: {
    ...mapActions('edit', ['setColor']),
    changeColor (color) {
      this.setColor({ color })
    },
    getColors (pallete) {
      let tones = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
      if (pallete === 'black') return [ 'black', 'white', 'primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'light', 'dark' ]
      return [ pallete, ...tones.map(c => `${pallete}-${c}`) ]
    },
    isSelected (selected, color) {
      if (selected === color) return 'done'
      return ''
    }
  },
  computed: {
    ...mapState('edit', {
      properties: state => state.data.properties
    })
  },
  data () {
    return {
      colors: [
        'white',
        'black'
      ],
      palletes: [
        {
          label: 'Reds',
          chromatic: [ 'red', 'orange', 'yellow' ],
          colors: [ 'red', 'deep-orange', 'orange', 'amber' ]
        },
        {
          label: 'Greens',
          chromatic: [ 'lime', 'green', 'teal' ],
          colors: [ 'yellow', 'lime', 'light-green', 'green' ]
        },
        {
          label: 'Blues',
          chromatic: [ 'cyan', 'blue', 'purple' ],
          colors: [ 'teal', 'cyan', 'light-blue', 'blue' ]
        },
        {
          label: 'Purples',
          chromatic: [ 'cyan', 'blue', 'purple' ],
          colors: [ 'indigo', 'deep-purple', 'purple', 'pink' ]
        },
        {
          label: 'Greys',
          chromatic: [ 'cyan', 'blue', 'purple' ],
          colors: [ 'grey', 'blue-grey', 'brown', 'black' ]
        }
      ]
    }
  }
}
</script>
