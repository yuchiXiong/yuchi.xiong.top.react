import React, { Suspense } from 'react';
import { Spin, } from 'antd';
import { renderRoutes } from 'react-router-config';

import Header from '@/components/header';
import Footer from '@/components/footer';

const Loading = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}><Spin /></div>
    )
};

const BlogLayout = props => {
    return <>
        <Header />
        <div className='blogs-body'>
            <Suspense fallback={<Loading />}>
                {renderRoutes(props.route.routes)}
            </Suspense >
        </div>
        <Footer />
    </>
}

export default BlogLayout;