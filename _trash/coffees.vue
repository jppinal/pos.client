<template lang="pug">
.col.full-width
  q-card.bg-brown-3
    q-card-actions(align="around")
      q-btn.on-left(v-for="o in options" flat :key="o.name")
        span {{ o.off.label }}
  .col.shadow-2
    .row(
      v-for=("c in coffees")
      :key="c.label"
      :class="c.class"
      style="padding: 10px;"
      )
      .col-3
        q-btn(:icon="c.icon" flat disable) {{ c.label }}
      .col-9
        q-btn.on-left(v-for="a in c.actions" flat :key="a.label")
          span {{ a.label }}
        q-btn.on-left(v-for="s in c.specials" flat color="yellow" :key="s.label")
          span {{ s.label }}
</template>

<script>
import {
  QBtn,
  QIcon,
  QList,
  QCard,
  QCardMain,
  QCardActions,
  QCardSeparator
} from 'quasar'

export default {
  name: 'coffees',
  components: {
    QBtn,
    QIcon,
    QList,
    QCard,
    QCardMain,
    QCardActions,
    QCardSeparator
  },
  data () {
    return {
      options: [
        {
          name: 'Type',
          off: { label: 'Máquina', icon: 'radio', color: 'white' },
          on: { label: 'Sobre', icon: 'local offer', color: 'yellow-4' }
        },
        {
          name: 'Ice',
          off: { label: 'Sin hielo', color: 'white', icon: 'ac unit' },
          on: { label: 'Con hielo', color: 'blue-9', icon: 'ac unit' }
        },
        {
          name: 'Caffeine',
          off: { label: 'Con cafeína', icon: 'panorama fish eye', color: 'white' },
          on: { label: 'Descafei -nado', icon: 'lens', color: 'brown-7' }
        },
        {
          name: 'Cup',
          off: { label: 'Taza', icon: 'panorama fish eye', color: 'white' },
          on: { label: 'Vaso', icon: 'lens', color: 'brown-7' }
        }
      ],
      coffees: [
        {
          label: 'Solo',
          icon: 'local cafe',
          color: 'brown-10',
          class: 'bg-brown-10 text-white',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Solo', icon: 'local cafe', color: 'brown-10' },
            { label: 'Corto', icon: 'local cafe', color: 'brown-10' },
            { label: 'Largo', icon: 'local cafe', color: 'brown-7' },
            { label: 'Cortado', icon: 'local drink', color: 'brown-5' }
          ],
          specials: [
          ]
        },
        {
          label: 'C/alcohol',
          icon: 'local bar',
          color: 'brown-10',
          class: 'bg-brown-9 text-white',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Carajillo', icon: 'local bar' }
          ],
          specials: [
            { label: 'Irlandés', icon: 'local bar' },
            { label: 'Cubano', icon: 'local bar' }
          ]
        },
        {
          label: 'Bombón',
          icon: 'local drink',
          color: 'brown-10',
          class: 'bg-brown-8 text-white',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Normal', icon: 'local drink' }
          ],
          specials: [
            { label: 'Especial', icon: 'local drink' }
          ]
        },
        {
          label: 'Con leche',
          icon: 'local drink',
          color: 'brown-10',
          class: 'bg-brown-7 text-white',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Corto de leche', icon: 'local drink' },
            { label: 'Normal', icon: 'local drink' },
            { label: 'Largo de leche', icon: 'local drink' }
          ],
          specials: [
          ]
        },
        {
          label: 'Con Crema',
          icon: 'local drink',
          color: 'brown-10',
          class: 'bg-brown-6 text-white',
          optionsclass: 'bg-brown-6',
          specials: [
            { label: 'Capuccino', icon: 'local drink' },
            { label: 'Canelo', icon: 'local drink' },
            { label: 'Caramelo', icon: 'local drink' }
          ],
          actions: []
        },
        {
          label: 'Con Nata',
          icon: 'spa',
          color: 'brown-10',
          class: 'bg-brown-5 text-white',
          optionsclass: 'bg-brown-6',
          specials: [
            { label: 'Vienés', icon: 'local drink' },
            { label: 'Delicia de Café', icon: 'local drink' },
            { label: 'Con bola de helado', icon: 'local drink' }
          ],
          actions: []
        },
        {
          label: 'Cola-cao',
          icon: 'spa',
          color: 'brown-10',
          class: 'bg-brown-4 text-white',
          optionsclass: 'bg-brown-6',
          specials: [
          ],
          actions: [
            { label: 'Frío', icon: 'local drink' },
            { label: 'Caliente', icon: 'local drink' }
          ]
        }
      ]
    }
  }
}
</script>
