import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import UserBlogsSider from './components/user-blogs-sider';
import BlogEditor from './components/blog-editor';

import { Users } from '@/utils/api';
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

const { Sider, Content } = Layout;

const BlogNew = () => {

    const userInfo = JSON.parse(localStorage.getItem('user'));
    const [userBlogs, setUserBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState({});

    useEffect(() => {
        Users.userBlogs(userInfo.id).then(res => {
            setUserBlogs(res.data.blogs);
        });
    }, [userInfo.id]);

    const handleEditorChange = content => {
        setBlog({
            ...blog,
            content: content
        });
    };

    const toggleBlog = blog => {
        setTitle(blog.title);
        setBlog({ ...blog });
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
                userInfo ?
                    <Layout>
                        <Sider
                            className={styles['sider']}
                            theme="light">
                            <UserBlogsSider
                                userBlogs={userBlogs}
                                onClick={toggleBlog} />
                        </Sider>
                        <Content className={styles['content']}>
                            <BlogEditor
                                blog={blog}
                                title={title}
                                onTitleChange={title => setTitle(title)}
                                onEditorChange={handleEditorChange} />
                        </Content>
                    </Layout> :
                    <Redirect to='/login' />
            }
        </>
    );
};



export default BlogNew;