import React from 'react';
import { Typography } from "antd";
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
// import printJS from 'print-js';
import websiteConfig from '@/config/website';

import styles from './index.module.scss';

const input = `
**鱼翅今天努力了吗**

> 一千九百九十七万零八百零九线Coder, API Caller. 互联网世界朴实的搬瓦工, 希望有一天能盖起自己的摩天大楼.

- 🌱 2019年6月毕业于耶极大学.
- 🔭 2019年2月进入公司实习.
- 😄 使用Ruby/JavaScript语言，React/Rails菜鸟开发者.
- ⚡ 网抑云用户/来打厨.

**我的个人项目**
- [我的博客：持续迭代中](https://github.com/yuchiXiong/yuchi.xiong.top.react)：基于React开发的博客系统.
- [博客服务器：持续迭代中](https://github.com/yuchiXiong/yuchi.xiong.top.rails)：基于Rails开发的博客系统服务器.
- [灯光编辑器：开发中](https://github.com/yuchiXiong/light-tools)：基于React开发的灯光编辑工具.
<!-- - ~~[ZIO：规划中](https://github.com/yuchiXiong/zio)：基于React开发的时间管理工具~~ -->

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