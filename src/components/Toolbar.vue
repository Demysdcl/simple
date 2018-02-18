<script>
import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'
export default {
  components: {
    QToolbar, QToolbarTitle, QBtn, QIcon
  },
  props: ['layout'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<template>
  <q-toolbar color="primary">
    <q-btn
      flat
      @click="clicked">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title class="title-left">
      Todovue
    </q-toolbar-title>
  </q-toolbar>
</template>

<style lang="stylus">
.title-left
  text-align left
  margin-left 5px
</style>
