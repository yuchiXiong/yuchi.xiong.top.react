import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { Input } from 'antd';
import { createBlog } from './store/action';
// import { SaveOutlined } from '@ant-design/icons';

import { Editor } from '@toast-ui/react-editor';

import websiteConfig from '@/config/website';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import styles from './new.module.scss';

// function createLastButton() {
//     const button = document.createElement('button');

//     button.className = 'last';
//     button.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="save" width="15px" height="15px" fill="currentColor" aria-hidden="true"><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path></svg>`;

//     return button;
// }

function createPublisherButton() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p>发布博客</p>';

    return button;
}

const BlogNew = props => {

    const { userInfo } = props;
    const { releaseBlog } = props;

    const [blog, setBlog] = useState({
        title: '',
        content: ''
    });

    const mdRef = useRef(null);

    useEffect(() => {
        if (userInfo || JSON.parse(localStorage.getItem('user'))) {
            const mdInstance = mdRef.current.getInstance();

            // ! toast-ui/react-editor 未提供 removeEventType 方法
            !mdInstance.eventManager._hasEventType('onRelease') && mdInstance.eventManager.addEventType('onRelease');
            mdInstance.eventManager.listen('onRelease', () => {
                releaseBlog(blog);
            });

            return () => {
                mdInstance.eventManager.removeEventHandler('onRelease');
            };
        }

    }, [blog, userInfo, releaseBlog]);

    const handleEditorChange = () => {
        setBlog({
            ...blog,
            content: mdRef.current.getInstance().getMarkdown()
        });
    };

    // useEffect(() => {
    //     const mdInstance = mdRef.current.getInstance();
    //     const mdToolbarInstance = mdInstance.getUI().getToolbar();

    //     mdToolbarInstance.insertItem(mdToolbarInstance.getItems().length, {
    //         options: {
    //         }
    //     });

    // }, [mdRef]);

    return (
        <>
            <Helmet>
                <title>{`写博客 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`写博客 | ${websiteConfig.name}`} />
            </Helmet>
            {
                (userInfo || JSON.parse(localStorage.getItem('user'))) ?
                    <>

                        <Input
                            styleName={styles['input-title']}
                            onChange={e => setBlog({
                                ...blog,
                                title: e.target.value
                            })}
                            placeholder='Please input your blog title !' />
                        <Editor
                            ref={mdRef}
                            initialValue={blog.content}
                            onChange={handleEditorChange}
                            previewStyle="vertical"
                            height="100%"
                            initialEditType="markdown"
                            useCommandShortcut={true}
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
                    </> :
                    <Redirect to='/login' />
            }

        </>
    );
};

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
});

const mapDispatchToProps = (dispatch) => ({
    releaseBlog(blog) {
        dispatch(createBlog(blog));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogNew);