import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
import { Typography } from "antd";
import dayjs from 'dayjs';
import websiteConfig from '@/config/website';

import { getBlog } from './store/action';

import '@toast-ui/editor/dist/toastui-editor.css';
// import 'Assets/styles/markdown.css';

const { Title, Paragraph } = Typography;

const BlogShow = props => {

    const { blog } = props;
    const { fetchBlog } = props;

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
                        <Paragraph>发布时间：{dayjs(blog.createdAt).format('YYYY年MM月DD日 HH:mm:ss')}</Paragraph>
                        <Viewer
                            initialValue={blog.content}
                            previewStyle="vertical"
                            height="auto"
                            initialEditType="markdown"
                            useCommandShortcut={true}
                            hideModeSwitch={true}
                            viewer={true}
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