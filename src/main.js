/* eslint-disable */
require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import store from './store/store'
import Quasar from 'quasar'
import router from './router'
import VeeValidate from 'vee-validate'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'
import messages from './pt_BR'

Vue.config.productionTip = false
Vue.use(Quasar)
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: { messages: messages }
  }
})

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}


new Vue({
  el: '#q-app',
  store,
  router,
  render: h => h(require('./App').default)
})
