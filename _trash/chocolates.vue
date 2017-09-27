<template lang="pug">
.col.full-width
  .col.shadow-2(style="margin-top: 5px;")
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
        q-btn.on-left(v-for="s in c.specials" flat color="pink-10" :key="s.label")
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
          label: 'a la taza',
          icon: 'local cafe',
          color: 'brown-10',
          class: 'bg-brown-5 text-black',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Normal', icon: 'local cafe', color: 'brown-10' },
            { label: 'Grande', icon: 'local cafe', color: 'brown-7' },
            { label: 'Con bambas', icon: 'local cafe', color: 'brown-7' },
            { label: 'Con bizcocho', icon: 'local cafe', color: 'brown-7' },
            { label: 'Con Magdalena', icon: 'local cafe', color: 'brown-7' }
          ],
          specials: [
            { label: 'Suizo', icon: 'local drink', color: 'brown-5' },
            { label: 'Blanco', icon: 'local drink', color: 'brown-5' }
          ]
        },
        {
          label: 'Con sirope',
          icon: 'opacity',
          color: 'brown-4',
          class: 'bg-brown-4 text-black',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Choco-menta', icon: 'local bar' }
          ],
          specials: [
            { label: 'especial', icon: 'local bar' }
          ]
        },
        {
          label: 'Con helado',
          icon: 'local drink',
          color: 'brown-10',
          class: 'bg-brown-3 text-black',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Ice-chocolat', icon: 'local drink' }
          ],
          specials: [
            { label: 'Choco-Almendrado', icon: 'local drink' }
          ]
        },
        {
          label: 'Con Fruta',
          icon: 'local drink',
          color: 'brown-10',
          class: 'bg-brown-2 text-black',
          optionsclass: 'bg-brown-6',
          actions: [
            { label: 'Choco-Plátano', icon: 'local drink' }
          ],
          specials: [
          ]
        }
      ]
    }
  }
}
</script>
