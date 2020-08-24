import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Typography, Tooltip } from 'antd';
import { HomeFilled, MehFilled, GithubOutlined } from '@ant-design/icons';
// import { HomeFilled, FolderFilled, TagsFilled, ContactsFilled, MehFilled, BookFilled } from '@ant-design/icons';
import websiteConfig from '@/config/website';

import styles from './index.module.scss';

const { Title } = Typography;

const Header = () => {

    const [current, setCurrent] = useState('home');
    const [onTop, setOnTop] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location]);

    useEffect(() => {
        window.addEventListener('scroll', e => {
            setOnTop(window.scrollY > 0);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    const handleClick = e => {
        setCurrent(e.key);
        history.push(e.key);
    };

    return (
        <header
            className={styles.container}
            style={{ background: onTop && '#fff', borderBottom: onTop && '2px solid #FDCE4E' }}
        >
            <section className={styles.header}>
                <Title
                    className={styles.title}
                    onClick={() => history.push('/')}
                    level={3}>
                    {websiteConfig.name}
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
            <div className={styles.github}>
                <Tooltip placement="topLeft" title={'如果喜欢请给我一个Star~'}>
                    <a href='https://github.com/yuchiXiong/yuchi.xiong.top.react' target="_blank" rel="noopener noreferrer">
                        <GithubOutlined />
                    </a>
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;