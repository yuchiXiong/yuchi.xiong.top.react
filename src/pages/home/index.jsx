import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { Carousel, Tag, Typography } from 'antd';

import BlogList from '@/components/blog-list';

import styles from './index.module.scss';

const { Title } = Typography;

const Home = props => {

    const { hots } = props;

    return (
        <DocumentTitle title='首页 | 鱼翅是个周口店人'>
            <>
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
        </DocumentTitle>
    );
};

const mapStoreToProps = state => {
    return {
        hots: state.home.hots,
        list: state.home.list
    };
};

export default connect(mapStoreToProps)(Home);