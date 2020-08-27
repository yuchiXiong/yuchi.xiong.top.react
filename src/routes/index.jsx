import React from 'react';

const Login = React.lazy(() => import('@/pages/user/login'));

const Home = React.lazy(() => import('@/pages/home'));

const BlogShow = React.lazy(() => import('@/pages/home/show'));
const BlogNew = React.lazy(() => import('@/pages/home/new'));

const Archive = React.lazy(() => import('@/pages/archive'));
const Category = React.lazy(() => import('@/pages/category'));
const Tag = React.lazy(() => import('@/pages/tag'));
const About = React.lazy(() => import('@/pages/about'));

const ServerError = React.lazy(() => import('@/pages/500'));
const NotFound = React.lazy(() => import('@/pages/404'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        key: 'home'
    },
    {
        path: '/login',
        component: Login,
        key: 'login'
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
        path: '/category',
        component: Category,
        key: 'category'
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
    {
        path: '/error',
        component: ServerError,
        key: 'server-error'
    },
    {
        path: '*',
        component: NotFound,
        key: 'not-found'
    }
];

export default routes;