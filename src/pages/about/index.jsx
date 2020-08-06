import React from 'react';
import { Typography, Button } from "antd";
import DocumentTitle from 'react-document-title';
import SimpleMDEEditor from 'react-simplemde-editor';
import printJS from 'print-js';

import 'easymde/dist/easymde.min.css';
import 'Assets/styles/markdown.css';
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

    let MdInstance = null;

    const getInsance = instance => {
        instance.togglePreview();
        MdInstance = instance;
    };

    const downloadPDF = () => {

        const editorHtml = MdInstance.markdown(input);
        printJS({
            type: 'raw-html',
            css: "",
            scanStyles: true,
            printable: editorHtml,
            targetStyles: ['*'],
            documentTitle: "&nbsp"
        });
    };

    return (
        <DocumentTitle title='鱼翅 | 鱼翅是个周口店人'>
            <div className={styles.about}>
                <Title level={2}>我是谁？</Title>
                <SimpleMDEEditor
                    id='about_show_markdown_editor'
                    className='markdown-body'
                    getMdeInstance={getInsance}
                    value={input}
                    options={{
                        autofocus: true,
                        spellChecker: false,
                        toolbar: false
                    }}
                />
                <Button onClick={downloadPDF}>下载简历</Button>
            </div>
        </DocumentTitle>
    );

};

export default About;