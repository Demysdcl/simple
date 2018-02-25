<script>
import { QCard, QCardTitle, QCardMain, QCardSeparator } from 'quasar'
export default {
  props: {
    title: '',
    colot: ''
  },
  components: {
    QCard, QCardTitle, QCardMain, QCardSeparator
  }
}
</script>

<template>
  <q-card :color="color">
    <q-card-title style="text-align:left">
      {{ title }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <slot>Empty Card</slot>
    </q-card-main>
  </q-card>
</template>