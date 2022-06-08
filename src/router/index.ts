import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home';
import NotFound from '../components/notFound';
import Working from "../components/working";

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/hide_and_seek',
        name: 'hideAndSeek',
        component: Working
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)',
        name: 'error',
        redirect: '/not-found'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router