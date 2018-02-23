<script>
import { QCard, QCardTitle, QCardMain, QCardSeparator } from 'quasar'
export default {
  props: {
    title: ''
  },
  components: {
    QCard, QCardTitle, QCardMain, QCardSeparator
  }
}
</script>

<template>
  <q-card>
    <q-card-title style="text-align:left">
      {{ title }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <slot>Empty Card</slot>
    </q-card-main>
  </q-card>
</template>