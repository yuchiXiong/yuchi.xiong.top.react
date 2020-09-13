import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
import { Typography, Skeleton } from "antd";
import dayjs from 'dayjs';
import websiteConfig from '@/config/website';

import { Blogs } from '@/utils/api';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styles from './show.module.scss';

const { Title, Paragraph } = Typography;

const BlogShow = () => {

    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const viewerRef = useRef(null);

    const fetchBlog = id => {
        Blogs.show(id).then(res => {
            setBlog(res.data.blog);
        });
    };

    useEffect(() => {
        fetchBlog(id);
    }, [id]);

    useEffect(() => {
        blog && !(blog.error) && viewerRef.current.getInstance().setMarkdown(blog.content);
    }, [blog]);

    const title = blog ? blog.error ? blog.error : blog.title : '加载中……';

    return (
        <>
            <Helmet>
                <title>{`${title} | ${websiteConfig.name}`}</title>
                <meta name="description" content={`${title} | ${websiteConfig.name}`} />
            </Helmet>
            <Typography className={styles['blog']}>
                {
                    blog ?
                        blog.error ?
                            <h1>{blog.error}</h1> :
                            <>
                                <Title>{blog.title}</Title>
                                <Paragraph>发布时间：{dayjs(blog.createdAt).format('YYYY年MM月DD日 HH:mm:ss')}</Paragraph>
                                <Viewer
                                    ref={viewerRef}
                                    initialValue={blog.content}
                                    previewStyle="vertical"
                                    height="auto"
                                    initialEditType="markdown"
                                    useCommandShortcut={true}
                                    hideModeSwitch={true}
                                    viewer={true}
                                />
                            </> :
                        <Skeleton active paragraph={{ rows: 20 }} title round={true} />
                }
            </Typography>
        </>
    );
};

export default BlogShow;