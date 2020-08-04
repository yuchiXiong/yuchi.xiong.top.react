import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));
const BlogShow = React.lazy(() => import('@/pages/home/show'));
const BlogNew = React.lazy(() => import('@/pages/home/new'));

const About = React.lazy(() => import('@/pages/about'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        key: 'home'
    },
    {
        path: '/blog/new',
        component: BlogNew,
        exact: true,
        key: 'blog-new'
    },
    {
        path: '/blog/:id',
        component: BlogShow,
        key: 'blog-show'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
];

export default routes;