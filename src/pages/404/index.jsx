import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import styles from './not-found.module.scss';

const { Title, Text } = Typography;

const NotFound = props => {

    return <div className={styles['not-found']}>
        <img src='./404.jpg' alt='页面走丢了' />
        <section className={styles['description']}>
            <Title level={1}>页面走丢了……</Title>
            <Text>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。<br /> 您可以尝试返回 <Link to='/'>首页</Link> 。</Text>
        </section>
    </div>;
};

export default NotFound;