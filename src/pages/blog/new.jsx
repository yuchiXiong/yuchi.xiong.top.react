import React from 'react';
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

const { Sider, Content } = Layout;

class BlogNew extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        this.state = {
            // * 当前编辑器里的博客对象
            currentBlog: {
                title: '',
                content: ''
            },
            // * 当前用户的博客列表
            blogs: []
        };
        this.toggleBlog = this.toggleBlog.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    // * 组件挂载后拉取当前用户的博客列表
    componentDidMount() {
        Users.userBlogs(this.userInfo.id).then(res => {
            this.setState({
                blogs: res.data.blogs
            });
        });
    }

    toggleBlog(id) {
        const selectedBlog = this.state.blogs.filter(item => item.id.toString() === id.toString())[0];
        this.setState({ currentBlog: selectedBlog });
    }

    handleEditorChange(blog) {
        this.setState({ currentBlog: blog });
    }

    render() {
        return <>
            <Helmet>
                <title>{`写博客 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`写博客 | ${websiteConfig.name}`} />
            </Helmet>
            {
                this.userInfo ?
                    <Layout>
                        <Sider
                            className={styles['sider']}
                            theme="light">
                            <UserBlogsSider
                                dataSource={this.state.blogs}
                                onClick={this.toggleBlog} />
                        </Sider>
                        <Content className={styles['content']}>
                            <BlogEditor
                                blog={this.state.currentBlog}
                                onChange={this.handleEditorChange}
                            />
                        </Content>
                    </Layout> :
                    <Redirect to='/login' />
            }
        </>;
    }
}

export default BlogNew;