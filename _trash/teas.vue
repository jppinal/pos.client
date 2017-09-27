<template lang="pug">
.col.full-width(style="margin-top: 5px;")
  .col.shadow-2.bg-green-1
    .row(
      v-for="t in teas"
      :key="t.label"
      style="padding: 5px;"
      :class="t.class"
      )
      .col-2
        q-btn(disable flat) {{ t.label }}
      .col-10
        q-btn.on-left(v-for="a in t.actions" flat :color="t.color" :key="a.label")
          span {{ a.label }}
</template>

<script>
import {
  QBtn,
  QIcon,
  QCard,
  QCardMain,
  QCardActions,
  QCardTitle
} from 'quasar'

export default {
  name: 'teas',
  components: {
    QBtn,
    QIcon,
    QCard,
    QCardMain,
    QCardActions,
    QCardTitle
  },
  data () {
    return {
      teas: [
        {
          label: 'té blanco',
          lightcolor: 'white',
          color: 'black',
          class: 'bg-light-green-1 text-black',
          actions: [
            { label: 'Pai-mu-tan' },
            { label: 'Con moras' }
          ]
        },
        {
          label: 'té verde',
          lightcolor: 'light-green-2',
          color: 'green',
          class: 'bg-light-green-2 text-green',
          actions: [
            { label: 'Coco almendrado' },
            { label: 'Jazmín' },
            { label: 'Fresas y nata' },
            { label: 'Ojo de tigre' },
            { label: 'Sencha' }
          ]
        },
        {
          label: 'té negro',
          lightcolor: 'grey-5',
          color: 'white',
          class: 'bg-dark text-white',
          actions: [
            { label: 'Arabia' },
            { label: 'English breakfast' },
            { label: 'Pakistán' },
            { label: 'Mantequilla trufada' },
            { label: 'Violeta con chocolate' }
          ]
        },
        {
          label: 'té rojo',
          lightcolor: 'red-1',
          color: 'red',
          class: 'bg-red-2 text-red',
          actions: [
            { label: '50 anyos' },
            { label: 'Canela-Lavanda' },
            { label: 'Desierto rojo' },
            { label: 'Pinya colada' }
          ]
        },
        {
          label: 'rooibos',
          lightcolor: 'amber-1',
          color: 'brown-6',
          class: 'bg-brown-2 text-brown-6',
          actions: [
            { label: 'Afrodita' },
            { label: 'Alma' },
            { label: 'Choco-naranja' },
            { label: 'Memorias África' },
            { label: 'Namaste' },
            { label: 'Original' }
          ]
        },
        {
          label: 'tisanas',
          lightcolor: 'lime-1',
          color: 'lime-9',
          class: 'bg-lime-2 text-lime-9',
          actions: [
            { label: 'Frutas del bosque' },
            { label: 'Manzanilla' },
            { label: 'Poleo-menta' },
            { label: 'Tila' }
          ]
        }
      ]
    }
  }
}
</script>
