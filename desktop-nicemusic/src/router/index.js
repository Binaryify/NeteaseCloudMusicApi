import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
