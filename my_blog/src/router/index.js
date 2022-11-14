import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/Home.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/Login.vue'),
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('../views/Register.vue'),
    },
    {
        name: 'life',
        path: '/life',
        component: () => import('../views/Life.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router