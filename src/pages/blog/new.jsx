import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, useHistory } from 'react-router-dom';
import { Input, Menu, Layout, Button, Typography } from 'antd';
import { Editor } from '@toast-ui/react-editor';

import { Users } from '@/utils/api';
import { BlogPhotos } from '@/utils/api';

import { LeftOutlined, PlusOutlined } from '@ant-design/icons';

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

// ! 太晚了……明天再弄吧
// ! 留了个坑：首先这个页面的组件该拆分了，第二点是关于store也要重新设计了
// ! 发布的模块原来使用的input是非受控组件，为了能够做编辑的部分，改成了受控组件，对应的状态啥的都要调整

const { SubMenu } = Menu;
const { Sider, Content } = Layout;
const { Text, Title } = Typography;

const ALI_OSS_DOMAIN = 'https://assets-blog-xiongyuchi.oss-cn-beijing.aliyuncs.com';

function createPublisherButton() {
    const button = document.createElement('button');

    button.className = 'last';
    button.innerHTML = '<p>发布博客</p>';

    return button;
}

const BlogNew = () => {

    const userInfo = JSON.parse(localStorage.getItem('user'));
    const [userBlogs, setUserBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState({
        title: '',
        content: ''
    });

    const history = useHistory();

    const mdRef = useRef(null);

    useEffect(() => {
        if (userInfo) {
            const mdInstance = mdRef.current.getInstance();

            // ! toast-ui/react-editor 未提供 removeEventType 方法
            !mdInstance.eventManager._hasEventType('onRelease') && mdInstance.eventManager.addEventType('onRelease');
            mdInstance.eventManager.listen('onRelease', () => {
                // releaseBlog(blog);
            });

            return () => {
                mdInstance.eventManager.removeEventHandler('onRelease');
            };
        }

    }, [blog, userInfo]);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        Users.userBlogs(userInfo.id).then(res => {
            setUserBlogs(res.data.blogs);
        });
    }, []);

    const handleEditorChange = () => {
        setBlog({
            ...blog,
            content: mdRef.current.getInstance().getMarkdown()
        });
    };

    const handleClick = e => {
        if (e.key === 'return-home') {
            history.push('/');
        } else if (e.key === 'add-blog-set') {
        } else {
            const blogs = userBlogs.filter(item => item.id.toString() === e.key.toString())[0];
            setTitle(blogs.title);
            mdRef.current.getInstance().setMarkdown(blogs.content);
            window.scrollTo(0, 0);
        }
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
                            <Menu
                                onClick={handleClick}
                                defaultSelectedKeys={[]}
                                defaultOpenKeys={['default-blog-set']}
                                mode="inline"
                                theme="light"
                            >
                                <Menu.Item key="return-home" className={styles['return-home-btn']}>
                                    <LeftOutlined /> <Title level={4}>回到首页</Title>
                                </Menu.Item>
                                <Menu.Item key="add-blog-set" className={styles['add-blog-set']}>
                                    <PlusOutlined /> <text>创建文集</text>
                                </Menu.Item>
                                <SubMenu
                                    key="default-blog-set"
                                    title={<span>默认(暂不支持文集)</span>}
                                >
                                    {
                                        userBlogs.map(item => {
                                            return <Menu.Item
                                                className={styles['sider-item']}
                                                title={1111}
                                                key={item.id}>
                                                <Title level={4} ellipsis style={{ marginBottom: 0 }}>{item.title}</Title>
                                                <Text>字数：{item.content.length}</Text>
                                            </Menu.Item>;
                                        })
                                    }
                                    <Menu.Item key="new-blog-btn" className={styles['new-blog-btn']}>
                                        <Button type="primary" ghost block>添加新博客</Button>
                                    </Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Content className={styles['content']}>
                            <Input
                                styleName={styles['input-title']}
                                // onChange={e => setBlog({
                                //     ...blog,
                                //     title: e.target.value
                                // })}
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                placeholder='博客标题' />
                            <Editor
                                ref={mdRef}
                                initialValue={blog.content}
                                onChange={handleEditorChange}
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
                        </Content>
                    </Layout>
                    :
                    <Redirect to='/login' />
            }

        </>
    );
};



export default BlogNew;