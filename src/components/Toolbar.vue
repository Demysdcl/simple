<script>
import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'
import { mapActions } from 'vuex'

export default {
  components: {
    QToolbar, QToolbarTitle, QBtn, QIcon
  },
  props: ['title'],
  methods: {
    ...mapActions(['changeToken', 'changeUser']),

    clicked () {
      this.$emit('clicked')
    },

    logout () {
      this.changeUser({username: null, password: null})
      this.changeToken(null)
      this.$router.push('/login')
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
    <q-btn
      flat
      @click="logout()" style="float:right">
      <q-icon name="exit_to_app" />
    </q-btn>
  </q-toolbar>
</template>

<style lang="stylus" scoped>
.title-left
  text-align left
  margin-left 5px
</style>
