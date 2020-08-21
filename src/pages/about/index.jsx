import React from 'react';
import { Typography } from "antd";
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
// import printJS from 'print-js';
import websiteConfig from '@/config/website';

import styles from './index.module.scss';

const input = `
**yuchiXiong/yuchiXiong**: 十八线coder, API Caller.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
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