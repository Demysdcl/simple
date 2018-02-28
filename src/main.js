require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import store from './store/store'
import Quasar from 'quasar'
import router from './router'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'

Vue.config.productionTip = false
Vue.use(Quasar)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  store,
  router,
  render: h => h(require('./App').default)
})
