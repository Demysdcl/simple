<script>
import Toolbar from './components/Toolbar'
import { mapGetters } from 'vuex'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { QLayout } from 'quasar'
export default {
  data: () => ({
    title: 'Home'
  }),
  components: {
    QLayout, Toolbar, Menu, Footer
  },
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    changeTitle (event) {
      this.title = event
    }
  }
}
</script>

<template>
<div id="q-app">
  <q-layout ref="layout" view="lHh Lpr lFf">
    <Toolbar @clicked="$refs.layout.toggleLeft()" 
      v-show="isLogged" :title="title" slot="header">
    </Toolbar>
    <Menu slot="left" @clicked="changeTitle($event)" v-show="isLogged"></Menu>
    <router-view></router-view>
    <Footer slot="footer" v-show="isLogged"></Footer>
  </q-layout>
</div>
</template>
