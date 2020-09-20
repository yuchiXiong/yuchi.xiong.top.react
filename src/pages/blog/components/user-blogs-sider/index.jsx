import React from 'react';
import { Menu, Typography, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import history from '@/utils/history';

import styles from './index.module.scss';

const { SubMenu } = Menu;
const { Title, Text } = Typography;

class UserBlogsSider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: -1
        };
    }

    handleClick(e) {
        if (e.key === 'return-home') {
            history.push('/');
        } else if (e.key === 'add-blog-set') {
        } else if (e.key === 'new-blog-btn') {
        } else {
            // const blogs = this.props.userBlogs.filter(item => item.id.toString() === e.key.toString())[0];
            this.props.onClick(e.key);
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
                    <PlusOutlined /> <Text>创建文集</Text>
                </Menu.Item>
                <SubMenu
                    key="default-blog-set"
                    title={<span>默认(暂不支持文集)</span>}
                >
                    {
                        this.props.dataSource.map((item, index) => {
                            return <Menu.Item
                                onClick={() => this.setState({ selected: index })}
                                className={styles['sider-item']}
                                title={1111}
                                key={item.id}>
                                <Text level={4} ellipsis className={styles['sider-item-title']}>{item.title}</Text>
                                {
                                    this.state.selected === index && <SettingOutlined
                                        onClick={() => console.log(item.id)}
                                        style={{ fontSize: '18px' }} />
                                }

                                {/* <Text >{item.content}</Text> */}
                                {/* <Text>字数：{item.content.length}</Text> */}
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