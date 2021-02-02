import {shopCart,favoriteCoffee,allDrinks} from './modules';

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    allDrinks,
    shopCart,
    favoriteCoffee

  },

});
