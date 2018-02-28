<script>
import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'
export default {
  components: {
    QToolbar, QToolbarTitle, QBtn, QIcon
  },
  props: ['title'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
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
      {{ title }} <span style="float:right" >{{ user.name }}</span>
    </q-toolbar-title>
  </q-toolbar>
</template>

<style lang="stylus" scoped>
.title-left
  text-align left
  margin-left 5px
</style>
