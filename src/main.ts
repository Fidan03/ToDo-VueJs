import { createApp } from 'vue';
import App from './App.vue';
import "primeicons/primeicons.css";
import router from './router.ts';
import store from './store/index.js'


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
