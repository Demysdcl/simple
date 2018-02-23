<script>
import { QCard, QCardTitle, QCardMain, QCardSeparator } from 'quasar'
export default {
  name: 'my-card',
  props: {
    title: ''
  }
}
</script>

<template>
  <q-card>
    <q-card-title>
      {{ title }}
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <slot>{{ Empty Card }}</slot>
    </q-card-main>
  </q-card>
</template>