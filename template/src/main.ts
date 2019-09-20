import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.styl';

Vue.config.productionTip = false;
Vue.use(element, { size: 'small'});

export default new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
