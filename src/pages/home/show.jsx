import React from 'react';
import { connect } from 'react-redux';
import SimpleMDEEditor from 'react-simplemde-editor';
import { Typography } from "antd";

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
    );
};

const mapStoreToProps = (state, ownProps) => ({
    blog: state.home.list.filter(item => item.id == ownProps.match.params.id)[0]
});

export default connect(mapStoreToProps, null)(BlogShow);