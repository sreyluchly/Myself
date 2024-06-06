import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage';
import AboutPage from '@/views/AboutPage';
import ResumePage from '@/views/ResumePage';
import ContactPage from '@/views/ContactPage';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/resume',
        name: 'ResumePage',
        component: ResumePage,
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
