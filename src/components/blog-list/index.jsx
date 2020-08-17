import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Avatar, Space, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';

// import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


const BlogList = props => {

    const { listData } = props;

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={`blog_home_list_item_${item.id}`}
                    // actions={[
                    //     <IconText icon={EyeOutlined} text="111" key="blog_home_list_visit" />,
                    //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    // ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={
                            <Link to={`/blog/${item.id}`}>
                                <Title level={4}>{item.title}</Title>
                            </Link>
                        }
                        description={item.description}
                    />
                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                        {item.content}
                    </Paragraph>
                </List.Item>
            )}
        />
    );
};

const mapStoreToProps = state => ({
    listData: state.home.list
});

export default connect(mapStoreToProps, null)(BlogList);