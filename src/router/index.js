import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRoutes from './main'
import storage from 'store'
import store from '../store'
import * as types from '../store/mutation-types'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Homepage',
      path: '/',
      meta: {requiresAuth: false},
      component: () => import('../pages/homepage/index')
    },
    ...generateMainRoutes(mainRoutes),
    {
      path: '*',
      component: import('../pages/NotFound')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)

  next()
})

export default router

// Generate main routes
function generateMainRoutes (menu = []) {
  let routes = []
  for (var key in menu) {
    let items = menu[key]
    for (var i = 0; i < items.length; i++) {
      routes.push(items[i])
    }
  }
  return routes
}
