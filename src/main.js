// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import VueDragula from 'vue-dragula'
import router from './router'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'

Vue.config.productionTip = false
Vue.use(Quasar)
Vue.use(VueDragula)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  render: h => h(require('./App').default)
})
