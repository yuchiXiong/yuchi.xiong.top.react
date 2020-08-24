import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Typography } from 'antd';
import { HomeFilled, MehFilled } from '@ant-design/icons';
// import { HomeFilled, FolderFilled, TagsFilled, ContactsFilled, MehFilled, BookFilled } from '@ant-design/icons';

import styles from './index.module.scss';

const { Title } = Typography;

const Header = () => {

    const [current, setCurrent] = useState('home');
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location]);

    const handleClick = e => {
        setCurrent(e.key);
        history.push(e.key);
    };

    return (
        <header className={styles.container}>
            <section className={styles.header}>
                <Title
                    className={styles.title}
                    onClick={() => history.push('/')}
                    level={3}>
                    布布今天也在摸鱼吗
                </Title>
                <Menu
                    className={styles.menu}
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal">
                    <Menu.Item key="/" icon={<HomeFilled />}>
                        首页
                    </Menu.Item>
                    {/* <Menu.Item key="/archive" icon={<FolderFilled />}>
                        归档
                    </Menu.Item> */}
                    {/* <Menu.Item key="/category" icon={<BookFilled />}>
                        分类
                    </Menu.Item> */}
                    {/* <Menu.Item key="/tag" icon={<TagsFilled />}>
                        标签
                    </Menu.Item> */}
                    {/* <Menu.Item key="/link" icon={<ContactsFilled />}>
                        友链
                    </Menu.Item> */}
                    <Menu.Item key="/about" icon={<MehFilled />}>
                        关于
                    </Menu.Item>
                    {/* <Menu.Item key="/search" icon={<BookFilled />}>
                        搜索
                    </Menu.Item> */}
                </Menu>
            </section>
        </header>
    );
};

export default Header;