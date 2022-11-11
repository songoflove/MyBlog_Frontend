import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'Blog',
        path: '/index',
        component: () => import('../views/Index.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router