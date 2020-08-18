import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import SimpleMDEEditor from 'react-simplemde-editor';
import { Typography } from "antd";
import websiteConfig from '@/config/website';

import { getBlog } from './store/action';

import 'easymde/dist/easymde.min.css';
import 'Assets/styles/markdown.css';

const { Title, Paragraph } = Typography;

const BlogShow = props => {

    const { blog } = props;
    console.log(blog);
    const { fetchBlog } = props;

    const getInsance = instance => {
        instance.togglePreview();
    };

    // ! 我只希望组件挂载的时候执行一次拉取方法，但再useEffect中申明[]依赖却引起了webpack编译的warning提示
    // ! 不声明[]时更离谱，会一直调用fetchBlog
    useEffect(() => {
        fetchBlog(props.match.params.id);
    }, [props.match.params.id, fetchBlog]);

    return (
        <>
            {
                blog &&
                <>
                    <Helmet>
                        <title>{`${blog.title} | ${websiteConfig.name}`}</title>
                        <meta name="description" content={`${blog.title} | ${websiteConfig.name}`} />
                    </Helmet>
                    <Typography>
                        <Title>{blog.title}</Title>
                        <Paragraph>发布时间：{blog.createdAt}</Paragraph>
                        <SimpleMDEEditor
                            id='blog-show-markdown-editor'
                            className='markdown-body'
                            getMdeInstance={getInsance}
                            value={blog.content}
                            options={{
                                autofocus: true,
                                spellChecker: false,
                                toolbar: false
                            }}
                        />
                    </Typography>
                </>
            }
        </>
    );
};

const mapStoreToProps = (state, ownProps) => ({
    blog: state.home.list.filter(item => item.id === parseInt(ownProps.match.params.id))[0]
});

const mapDispatchToProps = dispatch => ({
    fetchBlog(id) {
        dispatch(getBlog(id));
    }
});

export default connect(mapStoreToProps, mapDispatchToProps)(BlogShow);