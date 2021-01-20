import 'ant-design-vue/dist/antd.css';
import './styles/style.scss';



import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import TheButton from './components/common/TheButton';
import XIcon from './components/common/XIcon';
import TheTransition from './components/common/TheTransition';


Vue.config.productionTip = false

Vue.component("TheButton", TheButton);
Vue.component("XIcon", XIcon);
Vue.component("TheTransition", TheTransition);

Vue.use(Antd);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
