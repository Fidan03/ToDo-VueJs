<script>
import { createRouter, RouterLink, createWebHistory  } from 'vue-router';
import Home from '../App.vue'
import Completed from './Completed.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/completed',
        name: 'Completed',
        componenet: Completed,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
</script>


<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/completed">Completed</RouterLink>
    </nav>
</template>


<style lang="scss" scoped>

</style>