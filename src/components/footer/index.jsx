import React from 'react';
import { Typography } from 'antd';

import styles from './index.module.scss';

const { Title, Text } = Typography;

const Footer = () => (
    <footer className={styles.footer}>
        <Title level={4}>Design by yuchi.</Title>
        <Text>鄂ICP备18022630号</Text>
    </footer>
);

export default Footer;