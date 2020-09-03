import React from 'react';

import Layout from '@/layouts';

import Login from '@/pages/user/login';
import BlogNew from '@/pages/blog/new';
import ServerError from '@/pages/500';
import NotFound from '@/pages/404';

const routes = [
    {
        path: '/blog/new',
        component: BlogNew,
        exact: true,
        key: 'blog-new'
    },
    {
        component: Layout,
        routes: [
            {
                path: '/',
                component: React.lazy(() => import('@/pages/blog')),
                exact: true,
                key: 'home'
            },
            {
                path: '/blog/:id',
                component: React.lazy(() => import('@/pages/blog/show')),
                key: 'blog-show'
            },
            {
                path: '/archive',
                component: React.lazy(() => import('@/pages/archive')),
                key: 'archive'
            },
            {
                path: '/category',
                component: React.lazy(() => import('@/pages/category')),
                key: 'category'
            },
            {
                path: '/tag',
                component: React.lazy(() => import('@/pages/tag')),
                key: 'tag'
            },
            {
                path: '/about',
                component: React.lazy(() => import('@/pages/about')),
                key: 'about'
            },
            {
                path: '/login',
                excat: true,
                component: Login,
                key: 'login'
            },
            {
                path: '/error',
                component: ServerError,
                key: 'server-error'
            },
            {
                path: '*',
                component: NotFound,
                key: 'not-found'
            },
        ]
    },

];

export default routes;