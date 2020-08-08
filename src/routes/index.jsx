import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));

const BlogShow = React.lazy(() => import('@/pages/home/show'));
const BlogNew = React.lazy(() => import('@/pages/home/new'));

const Archive = React.lazy(() => import('@/pages/archive'));
const Tag = React.lazy(() => import('@/pages/tag'));
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
        path: '/archive',
        component: Archive,
        key: 'archive'
    },
    {
        path: '/tag',
        component: Tag,
        key: 'tag'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
];

export default routes;