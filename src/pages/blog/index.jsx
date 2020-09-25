import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BackTop } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
import websiteConfig from '@/config/website';

import BlogList from '@/components/blog-list';

import styles from './index.module.scss';

import { Blogs } from '@/utils/api';

// const { Title } = Typography;

const Home = () => {

    const [list, setList] = useState([]);
    const [total, setTotal] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetBlogs = page => {
        setLoading(true);
        Blogs.index(page).then(res => {
            if (res) {
                setList(res.data.blogs);
                setTotal(res.data.total);
                setLoading(false);
            } else {
                setError(true);
            }
        });
    };

    useEffect(() => {
        fetBlogs(1);
    }, []);

    const togglePage = page => {
        fetBlogs(page);
    };

    return (
        <>
            <Helmet>
                <title>{`首页 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`首页 | ${websiteConfig.name}`} />
            </Helmet>
            {/* <Carousel className={styles.carousel}>
                {hots.map(item => (
                    <div key={item.id}>
                        <Title level={2}>{item.title}</Title>
                        <Title level={4}>{item.description}</Title>
                        {item.tags.map((tag, index) => (
                            <Tag color="lime" key={`tag-${item.id}-${index}`}>{tag}</Tag>
                        ))}
                    </div>
                ))}
            </Carousel> */}
            {
                error ?
                    <Redirect to="/error" /> :
                    <BlogList list={list} total={total} togglePage={togglePage} loading={loading} />
            }

            <BackTop>
                <div className={styles['back-top-btn']}>
                    <StepBackwardOutlined rotate={90} style={{ fontSize: 36 }} />
                </div>
            </BackTop>
        </>
    );
};

export default Home;