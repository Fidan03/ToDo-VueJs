import { createApp } from 'vue';
import App from './App.vue';
import "primeicons/primeicons.css";
import router from './router.ts';


const app = createApp(App);
app.use(router);
app.mount('#app');
