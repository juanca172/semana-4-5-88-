import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";
const base = axios.create({
  baseURL: "http://localhost:3000/"
});

base.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

Vue.prototype.$http = base;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
