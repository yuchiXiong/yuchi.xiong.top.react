import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Carousel, Tag, Typography } from 'antd';
import websiteConfig from '@/config/website';

import BlogList from '@/components/blog-list';

import styles from './index.module.scss';

const { Title } = Typography;

const Home = props => {

    const { hots } = props;

    return (
        <>
            <Helmet>
                <title>{`首页 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`首页 | ${websiteConfig.name}`} />
            </Helmet>
            <Carousel className={styles.carousel}>
                {hots.map(item => (
                    <div key={item.id}>
                        <Title level={2}>{item.title}</Title>
                        <Title level={4}>{item.description}</Title>
                        {item.tags.map((tag, index) => (
                            <Tag color="lime" key={`tag-${item.id}-${index}`}>{tag}</Tag>
                        ))}
                    </div>
                ))}
            </Carousel>
            <BlogList />
        </>
    );
};

const mapStoreToProps = state => {
    return {
        hots: state.home.hots,
        list: state.home.list
    };
};

export default connect(mapStoreToProps)(Home);