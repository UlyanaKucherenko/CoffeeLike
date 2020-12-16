import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import UiKit from 'uikit';
import router from './router'
import store from './store'


import './styles/style.scss';
import 'ant-design-vue/dist/antd.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

Vue.config.productionTip = false

Vue.use(Antd, UiKit);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
