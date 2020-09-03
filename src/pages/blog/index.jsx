import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { BackTop } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
import websiteConfig from '@/config/website';

import BlogList from '@/components/blog-list';

// import 'react-calendar-heatmap/dist/styles.css';
import styles from './index.module.scss';

import { getBlogs } from './store/action';

// const { Title } = Typography;

const Home = props => {

    const { list, total, loading, sort } = props;
    const { getBlogs } = props;

    useEffect(() => {
        getBlogs(1);
    }, [getBlogs]);

    const togglePage = page => {
        getBlogs(page);
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



            {/* <div className={styles.card}>
                <Title level={4}>
                    {`大堰河，今天我看见雪使我想起了你。
                    你的被雪压着的草盖的坟墓，
                    你的关闭了的故居檐头的枯死的瓦菲，
                    你的被典押了的一丈平方的园地，
                    你的门前的长了青苔的石椅，
                    大堰河，今天我看到雪使我想起了你。`}</Title>
            </div> */}
            <BlogList list={sort.map(item => list[item])} total={total} togglePage={togglePage} loading={loading} />
            <BackTop>
                <div className={styles['back-top-btn']}>
                    <StepBackwardOutlined rotate={90} style={{ fontSize: 36 }} />
                </div>
                {/* <div style={style}>UP</div> */}
            </BackTop>
        </>
    );
};

const mapStoreToProps = state => {
    return {
        // hots: state.home.hots,
        loading: state.blog.loading,
        sort: state.blog.sort,
        list: state.blog.list,
        total: state.blog.total
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBlogs(page) {
            dispatch(getBlogs(page));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Home);