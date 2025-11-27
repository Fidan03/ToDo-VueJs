import { createRouter, createWebHistory  } from 'vue-router';
import Home from './pages/Home.vue'
import Completed from './pages/Completed.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/completed',
        name: 'Completed',
        component: Completed,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;