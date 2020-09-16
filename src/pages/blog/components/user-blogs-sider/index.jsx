import React from 'react';
import { Menu, Typography, Button } from 'antd';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const { SubMenu } = Menu;
const { Title, Text } = Typography;

class UserBlogsSider extends React.Component {

    handleClick(e) {
        if (e.key === 'return-home') {
            this.props.history.push('/');
        } else if (e.key === 'add-blog-set') {
        } else {
            const blogs = this.props.userBlogs.filter(item => item.id.toString() === e.key.toString())[0];
            this.props.onClick(blogs);
            window.scrollTo(0, 0);
        }
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick.bind(this)}
                defaultSelectedKeys={[]}
                defaultOpenKeys={['default-blog-set']}
                mode="inline"
                theme="light"
            >
                <Menu.Item key="return-home" className={styles['return-home-btn']}>
                    <LeftOutlined /> <Title level={4}>回到首页</Title>
                </Menu.Item>
                <Menu.Item key="add-blog-set" className={styles['add-blog-set']}>
                    <PlusOutlined /> <text>创建文集</text>
                </Menu.Item>
                <SubMenu
                    key="default-blog-set"
                    title={<span>默认(暂不支持文集)</span>}
                >
                    {
                        this.props.userBlogs.map(item => {
                            return <Menu.Item
                                className={styles['sider-item']}
                                title={1111}
                                key={item.id}>
                                <Title level={4} ellipsis style={{ marginBottom: 0 }}>{item.title}</Title>
                                <Text>字数：{item.content.length}</Text>
                            </Menu.Item>;
                        })
                    }
                    <Menu.Item key="new-blog-btn" className={styles['new-blog-btn']}>
                        <Button type="primary" ghost block>添加新博客</Button>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        );
    }
}

export default UserBlogsSider;