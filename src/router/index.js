import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {routesNames, routesPath} from './routes'
const Coffee = () => import(/* webpackChunkName: "coffee" */ '../views/Coffee.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: routesPath.home,
    name: routesNames.home,
    component: Home
  },
  {
    path: routesPath.coffe,
    name: routesNames.coffe,
    component: Coffee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
