import React from 'react';
import { connect } from 'react-redux';
import { Carousel, Tag, Typography } from 'antd';

// import styles from './index.scss';

const { Title } = Typography;

const Home = props => {

    const { hots } = props;

    return (
        <>
            <Carousel>
                {hots.map(item => (
                    <div key={item.id}>
                        <Title level={2}>{item.title}</Title>
                        <Title level={4}>{item.description}</Title>
                        {item.tags.map(tag => (
                            <Tag color="lime" key={`tag_${item.id}`}>{tag}</Tag>
                        ))}
                    </div>
                ))}
            </Carousel>
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