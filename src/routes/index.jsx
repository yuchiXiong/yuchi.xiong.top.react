import React from 'react';
const Home = React.lazy(() => import('../pages/home'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        key: 'home'
    }
];

export default routes;