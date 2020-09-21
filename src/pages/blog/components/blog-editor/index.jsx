import React from 'react';
import { Input } from 'antd';
import { Editor } from '@toast-ui/react-editor';

import { BlogPhotos } from '@/utils/api';

import styles from './index.module.scss';

const ALI_OSS_DOMAIN = 'https://assets-blog-xiongyuchi.oss-cn-beijing.aliyuncs.com';

// * 创建一个用于更新文章的按钮
function createUpdateBlogBtn() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p>发布更新</p>';

    return button;
}

function createToggleReleasedStateBtn() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p></p>';
}

class BlogEditor extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        this.editorRef = React.createRef(null);
        this.inputRef = React.createRef(null);
    }

    componentDidMount() {
        // * 更新标题和内容
        if (this.userInfo) {

            this.inputRef.current.setValue(this.props.blog.title);
            this.editorRef.current.getInstance().setMarkdown(this.props.blog.content);

            const mdInstance = this.editorRef.current.getInstance();
            // ! toast-ui/react-editor 未提供 removeEventType 方法
            !mdInstance.eventManager._hasEventType('onRelease') && mdInstance.eventManager.addEventType('onRelease');
            mdInstance.eventManager.listen('onRelease', () => {
                this.props.onBlogUpdate({
                    ...this.props.blog,
                    title: this.inputRef.current.state.value,
                    content: mdInstance.getMarkdown()
                });
            });
        }
    }

    componentWillUnmount() {
        const mdInstance = this.editorRef.current.getInstance();
        mdInstance.eventManager.removeEventHandler('onRelease');
    }

    render() {
        return <>
            <Input
                styleName={styles['input-title']}
                ref={this.inputRef}
                placeholder='博客标题' />
            <Editor
                ref={this.editorRef}
                previewStyle="vertical"
                height="100%"
                initialEditType="markdown"
                useCommandShortcut={true}
                hooks={
                    {
                        addImageBlobHook: (file, callback) => {
                            const formData = new FormData();
                            formData.append("file", file, file.name);
                            formData.append("blogId", 23);

                            BlogPhotos.create(formData).then(res => {
                                callback(ALI_OSS_DOMAIN + res.data.photoURL, '图片');
                            });
                        }
                    }
                }
                toolbarItems={[
                    'heading',
                    'bold',
                    'italic',
                    'strike',
                    'divider',
                    'hr',
                    'quote',
                    'divider',
                    'ul',
                    'ol',
                    'task',
                    'indent',
                    'outdent',
                    'divider',
                    'table',
                    'image',
                    'link',
                    'divider',
                    'code',
                    'codeblock',
                    'divider',
                    {
                        type: 'button',
                        options: {
                            el: createUpdateBlogBtn(),
                            tooltip: '发布更新',
                            className: 'last',
                            event: 'onRelease',
                            style: 'color: #333; width: auto; margin-left: auto;',
                            // text: '保存',
                        }
                    }
                ]}
            />
        </>;
    }
}

export default BlogEditor;