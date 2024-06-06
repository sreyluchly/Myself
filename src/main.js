import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);
  app.use(routers)
  app.mount('#app');
