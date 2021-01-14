import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import {routesIcon,routesNames, routesPath} from './routes'
//const Coffee = () => import(/* webpackChunkName: "coffee" */ '../views/Coffee.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coffee',
    name: 'Coffee',
    component: () => import(/* webpackChunkName: "coffee" */ '../views/theCoffee/Coffee.vue'),
    children: [
      {
        path:'all-drinks',
        name:'AllDrinks',
        component: () => import(/* webpackChunkName: "coffee" */ '../views/theCoffee/AllDrinks.vue'),
      },
      {
        path:'/coffee',
        name:'SliderDrinks',
        component: () => import(/* webpackChunkName: "coffee" */ '../views/theCoffee/SliderDrinks.vue'),
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
