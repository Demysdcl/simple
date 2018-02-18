<script>
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { QLayout } from 'quasar'
export default {
  components: {
    QLayout, Toolbar, Menu, Footer
  }

}
</script>

<template>
<div id="q-app">
  <q-layout ref="layout" view="lHh Lpr lFf">
    <Toolbar @clicked="$refs.layout.toggleLeft()" slot="header"></Toolbar>
    <Menu slot="left"></Menu>
    <main>
      <router-view></router-view>
    </main>
    <Footer slot="footer"></Footer>
  </q-layout>
</div>
</template>

<style lang="stylus">
@import '~variables'

main
  text-align center
</style>
