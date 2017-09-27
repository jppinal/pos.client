<template lang="pug">
.col.shadow-2.full-width(style="margin-top: 5px;")
  .row(
    v-for="m in milkshakes"
    :key="m.label"
    style="padding: 5px;"
    :class="m.class"
    )
      .col-3
        q-btn(flat disable) {{ m.label }}
      .col-3
        q-btn.on-left(v-for="o in m.options" flat :color="m.color" :key="o.label")
          span {{ o.label }}
      .col-6
        q-btn.on-left(v-for="a in m.actions" flat :color="a.color" :key="a.label")
          span {{ a.label }}
</template>


<script>
import {
  QBtn,
  QIcon,
  QCard,
  QCardMain,
  QCardActions
} from 'quasar'

export default {
  name: 'milkshakes',
  components: {
    QBtn,
    QIcon,
    QCard,
    QCardMain,
    QCardActions
  },
  data () {
    return {
      milkshakes: [
        {
          label: 'de Helado',
          class: 'text-pink-7 bg-pink-2',
          actions: [
            { label: 'Chocolate', color: 'brown-6' },
            { label: 'Fresa', color: 'pink' },
            { label: 'Vainilla', color: 'yellow-10' },
            { label: 'Nata/Oreo', color: 'grey-10' },
            { label: 'Nata con Caramelo y Nueces', color: 'lime-10' },
            { label: 'Coco', color: 'white' },
            { label: 'Stracciatella', color: 'blue-grey' },
            { label: 'Turrón Suprema', color: 'amber-10' }
          ],
          options: [
            { label: 'Sin nata' }
          ]
        },
        {
          label: 'de Frutas',
          class: 'text-pink-6 bg-pink-1',
          actions: [
            { label: 'Plátano canela', color: 'lime-10' },
            { label: 'Pantera rosa', color: 'pink' },
            { label: 'Frutilla', color: 'red' },
            { label: 'Morado', color: 'purple' },
            { label: 'Coco loco', color: 'cyan' }
          ],
          options: [
            { label: 'Con leche' }
          ]
        }
      ]
    }
  }
}
</script>
