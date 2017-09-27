<template lang="pug">
.col.shadow-2.full-width(style="margin-top: 5px;")
  .row(
    v-for="m in juices"
    :key="m.label"
    style="padding: 5px;"
    :class="m.class"
    )
    .col-12
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
  name: 'juices',
  components: {
    QBtn,
    QIcon,
    QCard,
    QCardMain,
    QCardActions
  },
  data () {
    return {
      juices: [
        {
          label: 'Naranja',
          class: 'text-orange-10 bg-orange-2',
          actions: [
            { label: 'Naranja', color: 'orange-9' },
            { label: 'Extra C', color: 'dark' },
            { label: 'Dúo', color: 'dark' },
            { label: 'Naranjoria', color: 'dark' },
            { label: 'Tropical', color: 'dark' },
            { label: 'Mango-naranja', color: 'dark' }
          ],
          options: [
            { label: 'Sin nata' }
          ]
        },
        {
          label: 'Manzana',
          class: 'text-light-green-10 bg-light-green-2',
          actions: [
            { label: 'Manzana', color: 'light-green-8' },
            { label: 'Manzana verde', color: 'light-green-8' },
            { label: 'Verde depurativo', color: 'dark' },
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
