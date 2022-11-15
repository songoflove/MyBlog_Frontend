import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/Home.vue'),
    },
    {
        path:'/',
        component: () => import('../views/Login.vue'),
        redirect: '/login'
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
    {
        name: 'blogDetails',
        path: '/blogDetails',
        component: () => import('../views/BlogDetails.vue'),
    },
    {
        name: 'edit',
        path: '/edit',
        component: () => import('../views/EditBlog.vue'),
    },
    {
        name: 'add',
        path: '/add',
        component: () => import('../views/AddBlog.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router