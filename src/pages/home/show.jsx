import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import SimpleMDEEditor from 'react-simplemde-editor';
import { Typography } from "antd";
import websiteConfig from '@/config/website';

import 'easymde/dist/easymde.min.css';
import 'Assets/styles/markdown.css';

const { Title, Paragraph } = Typography;

const BlogShow = props => {

    const { blog } = props;
    console.log(blog);

    const getInsance = instance => {
        instance.togglePreview();
    };

    return (
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
    );
};

const mapStoreToProps = (state, ownProps) => ({
    blog: state.home.list.filter(item => item.id == ownProps.match.params.id)[0]
});

export default connect(mapStoreToProps, null)(BlogShow);