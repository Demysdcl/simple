<script>
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { QLayout } from 'quasar'
export default {
  data () {
    return {
      title: 'Home'
    }
  },
  components: {
    QLayout, Toolbar, Menu, Footer
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
    <Toolbar @clicked="$refs.layout.toggleLeft()" :title="title" slot="header"></Toolbar>
    <Menu slot="left" @clicked="changeTitle($event)"></Menu>
    <router-view></router-view>
    <Footer slot="footer"></Footer>
  </q-layout>
</div>
</template>
