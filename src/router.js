import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({ routes, linkActiveClass: 'active' })

const isLoginRoute = route => route.path.indexOf('/login') !== -1

const isLogged = () => store.getters.isLogged

router.beforeEach((to, from, next) => {
  if (!isLoginRoute(to) && !isLogged()) {
    next('/login')
  }
  else if (isLoginRoute(to) && isLogged()) {
    next('/')
  }
  else {
    next()
  }
})

export default router
