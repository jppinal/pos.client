<template lang="pug">
.row(align="justify" inverted two-lines)
  q-btn(
    v-for="d in drinks"
    :color="d.color"
    style="padding: 10px; margin: 5px"
    :key="d.label"
    @click="getFamily({ family: d.path })")
    q-icon.on-left(:name="d.icon")
    .uppercase {{ d.label }}
</template>

<script>
import {
  QBtn,
  QIcon
} from 'quasar'

import { mapActions } from 'vuex'

export default {
  name: 'drinks',
  components: {
    QBtn,
    QIcon
  },
  methods: {
    ...mapActions('salesProducts', ['getFamily'])
  },
  data () {
    return {
      drinks: [
        { label: 'Café', color: 'brown-10', icon: 'local cafe', path: './drinks/coffees.json' },
        { label: 'Té', color: 'green', icon: 'spa', path: './drinks/teas.json' },
        { label: 'Refrescos', color: 'blue', icon: 'local drink', path: './drinks/coffees.json' },
        { label: 'Alcohólicas', color: 'purple', icon: 'local bar', path: './drinks/coffees.json' },
        { label: 'Chocolates', color: 'brown-6', icon: 'local cafe', path: './drinks/coffees.json' },
        { label: 'Batidos', color: 'pink', icon: 'local drink', path: './drinks/coffees.json' },
        { label: 'Zumos', color: 'orange', icon: 'local florist', path: './drinks/coffees.json' },
        { label: 'Granizados', color: 'cyan', icon: 'ac unit', path: './drinks/coffees.json' }
      ]
    }
  }
}
</script>
