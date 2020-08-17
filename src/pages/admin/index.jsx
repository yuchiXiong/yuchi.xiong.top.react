import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Admin = props => {
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <MailOutlined />
                        <span>文章管理</span>
                    </span>
                }
            >
                <Menu.Item key="1">发布文章</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default Admin;