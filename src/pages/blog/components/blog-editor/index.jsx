import React from 'react';
import { Input } from 'antd';
import { Editor } from '@toast-ui/react-editor';

import { Blogs, BlogPhotos } from '@/utils/api';

import styles from './index.module.scss';

const ALI_OSS_DOMAIN = 'https://assets-blog-xiongyuchi.oss-cn-beijing.aliyuncs.com';

function createPublisherButton() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p>发布更新</p>';

    return button;
}

class BlogEditor extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        this.blog = props.blog;
        this.onChange = props.onChange;
        this.mdRef = React.createRef(null);
    }

    componentDidMount() {
        // if (this.userInfo) {
        //     const mdInstance = this.mdRef.current.getInstance();

        //     // ! toast-ui/react-editor 未提供 removeEventType 方法
        //     !mdInstance.eventManager._hasEventType('onRelease') && mdInstance.eventManager.addEventType('onRelease');
        //     mdInstance.eventManager.listen('onRelease', () => {
        //         // releaseBlog(blog);
        //         console.log(this.props);
        //         // console.log(Blogs.update());
        //         console.log('...');
        //     });
        // }
    }

    shouldComponentUpdate(nextProps) {
        // ! 先简单编写更新逻辑，稍后补充完整
        this.mdRef.current.getInstance().setMarkdown(nextProps.blog.content);
        // this.mdRef.current.getInstance().scrollTop(0);
        return true;
    }

    componentWillUnmount() {
        // const mdInstance = this.mdRef.current.getInstance();
        // mdInstance.eventManager.removeEventHandler('onRelease');
    }

    // handleChange(currentBlog) {
    //     this.props.onChange(currentBlog);
    // }


    render() {
        return <>
            <Input
                styleName={styles['input-title']}
                onChange={e => this.onChange({ ...this.props.blog, title: e.target.value })}
                value={this.props.blog.title}
                placeholder='博客标题' />
            <Editor
                ref={this.mdRef}
                value={this.props.blog.content}
                onChange={() => this.onChange({ ...this.props.blog, content: this.mdRef.current.getInstance().getMarkdown() })}
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