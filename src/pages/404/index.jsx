import React from 'react';
import { Typography } from 'antd';

import styles from './not-found.module.scss';

const { Title } = Typography;

const NotFound = () => {
    return <div className={styles['not-found']}>
        <Title level={1}>━┳━ ━┳━</Title>
        <Title level={4}>页面走丢了……</Title>
        <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="https://404.life/" homePageName="回到我的主页"></script>
    </div>;
};

export default NotFound;