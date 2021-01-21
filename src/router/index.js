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
        path:'/coffee',
        name:'SliderDrinks',
        component: () => import(/* webpackChunkName: "coffee" */ '../views/theCoffee/SliderDrinks.vue'),
      }
    ]
  },

  {
    path:'/shopping-cart',
    name:'ShopCart',
    component: () => import(/* webpackChunkName: "shopCart" */ '../views/ShopCart.vue'),
  },
  {
    path:'/contacts',
    name:'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue'),
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
