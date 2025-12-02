import { createApp } from 'vue';
import App from './App.vue';
import "primeicons/primeicons.css";
import router from './router.ts';
import store from './store/index.js';

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'


const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd)
app.mount('#app');
