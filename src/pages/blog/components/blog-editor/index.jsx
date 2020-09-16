import React from 'react';
import { Input } from 'antd';
import { Editor } from '@toast-ui/react-editor';

import { BlogPhotos } from '@/utils/api';

import styles from './index.module.scss';

const ALI_OSS_DOMAIN = 'https://assets-blog-xiongyuchi.oss-cn-beijing.aliyuncs.com';

function createPublisherButton() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p>发布博客</p>';

    return button;
}

class BlogEditor extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = JSON.parse(localStorage.getItem('key'));
        this.onTitleChange = props.onTitleChange;
        this.onEditorChange = props.onEditorChange;
        this.mdRef = React.createRef(null);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    componentDidMount() {
        if (this.userInfo) {
            const mdInstance = this.mdRef.current.getInstance();

            // ! toast-ui/react-editor 未提供 removeEventType 方法
            !mdInstance.eventManager._hasEventType('onRelease') && mdInstance.eventManager.addEventType('onRelease');
            mdInstance.eventManager.listen('onRelease', () => {
                // releaseBlog(blog);
            });
        }
    }

    shouldComponentUpdate(nextProp) {
        if (nextProp !== this.props) {
            this.mdRef.current.getInstance().setMarkdown(nextProp.blog.content);
            window.scrollTo(0, 0);
            return true;
        } else {
            return false;
        }
    }

    componentWillUnmount() {
        const mdInstance = this.mdRef.current.getInstance();
        mdInstance.eventManager.removeEventHandler('onRelease');
    }

    handleEditorChange() {
        this.onEditorChange(this.mdRef.current.getInstance().getMarkdown());
    }

    render() {
        return <>
            <Input
                styleName={styles['input-title']}
                onChange={e => this.onTitleChange(e.target.value)}
                value={this.props.title}
                placeholder='博客标题' />
            <Editor
                ref={this.mdRef}
                // initialValue={this.props.blog.content}
                value={this.props.blog.content}
                onChange={this.handleEditorChange}
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
                            el: createPublisherButton(),
                            tooltip: '发布博客',
                            className: 'last',
                            event: 'onRelease',
                            style: 'color: #333; width: auto; margin-left: auto;'
                            // text: '保存',
                        }
                    }
                ]}
            />
        </>;
    }
}

export default BlogEditor;