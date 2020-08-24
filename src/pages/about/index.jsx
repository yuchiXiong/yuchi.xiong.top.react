import React from 'react';
import { Typography } from "antd";
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
// import printJS from 'print-js';
import websiteConfig from '@/config/website';

import styles from './index.module.scss';

const input = `
**鱼翅今天努力了吗**

> 十八线Coder, API Caller. 互联网世界最朴实的搬瓦工, 即便如此，还是希望有一天也能盖起自己的摩天大楼.

- 🌱 2019年6月毕业于某不知名大学
- 🔭 2019年2月进入公司开始作为开发者实习
- 😄 使用Ruby/JavaScript语言，React/Rails菜鸟开发者
- ⚡ 网抑云用户/来打厨

**我的个人项目**
- [我的个人博客](https://github.com/yuchiXiong/yuchi.xiong.top.react)：基于React开发的个人博客系统
- [ZIO](https://github.com/yuchiXiong/zio)：基于React开发的时间管理工具



<!-- **我的工作经历** -->
<!-- - [电子音乐板](https://musicpad.mvtrail.com) -->

**如何联系我**
邮箱：yuchi.xiong@foxmail.com

<!-- - 👯 I’m looking to collaborate on ... -->
<!-- - 🤔 I’m looking for help with ... -->
<!-- - 💬 Ask me about ... -->

`;

const { Title } = Typography;

const About = () => {

    // const downloadPDF = () => {
    //     printJS({
    //         type: 'raw-html',
    //         css: "",
    //         scanStyles: true,
    //         printable: editorHtml,
    //         targetStyles: ['*'],
    //         documentTitle: "&nbsp"
    //     });
    // };

    return (
        <>
            <Helmet>
                <title>{`鱼翅 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`鱼翅 | ${websiteConfig.name}`} />
            </Helmet>
            <div className={styles.about}>
                <Title level={2}>我是谁？</Title>
                <Viewer
                    initialValue={input}
                />
                {/* <Button onClick={downloadPDF}>下载简历</Button> */}
            </div>
        </>

    );

};

export default About;