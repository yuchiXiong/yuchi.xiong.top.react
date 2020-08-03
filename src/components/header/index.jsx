import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeFilled, FolderFilled, TagsFilled, ContactsFilled, MehFilled, BookFilled } from '@ant-design/icons';

import styles from './index.module.scss';

console.log(styles);

const Header = () => {

    const [current, setCurrent] = useState('home');
    let history = useHistory();

    const handleClick = e => {
        setCurrent(e.key);
        history.push('/' + e.key);
    };

    return (
        <header className={styles.header}>
            <Menu
                className={styles.menu}
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal">
                <Menu.Item key="home" icon={<HomeFilled />}>
                    首页
                </Menu.Item>
                <Menu.Item key="archive" icon={<FolderFilled />}>
                    归档
                </Menu.Item>
                <Menu.Item key="category" icon={<BookFilled />}>
                    分类
                </Menu.Item>
                <Menu.Item key="tag" icon={<TagsFilled />}>
                    标签
                </Menu.Item>
                <Menu.Item key="link" icon={<ContactsFilled />}>
                    友链
                </Menu.Item>
                <Menu.Item key="about" icon={<MehFilled />}>
                    关于
                </Menu.Item>
                <Menu.Item key="search" icon={<BookFilled />}>
                    搜索
                </Menu.Item>
            </Menu>
        </header>
    );
};

export default Header;