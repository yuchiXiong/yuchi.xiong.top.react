import React from 'react';
import { Typography } from 'antd';

import styles from './server-error.module.scss';

const { Title } = Typography;

const ServerError = () => {
    return <div className={styles['server-error']}>
        <Title level={1}>(∪｡∪)｡｡｡z2Z</Title>
        <Title level={4}>服务器君睡着了</Title>
    </div>
};

export default ServerError;