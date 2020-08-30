import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from 'antd';

import styles from './server-error.module.scss';

const { Title, Text } = Typography;

const ServerError = () => {
    return <div className={styles['server-error']}>
        <img src='./500.jpg' alt='服务器又双叒叕崩啦……' />
        <section className={styles['description']}>
            <Title level={1}>服务器又双叒叕崩啦……</Title>
            <Text>只要我不承认，这个bug就不是我改……<br /> 您可以尝试返回 <Link to='/'>首页</Link> 。</Text>
        </section>
    </div>;
};

export default ServerError;