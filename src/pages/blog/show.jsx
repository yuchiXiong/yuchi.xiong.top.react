import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Viewer } from '@toast-ui/react-editor';
import { Typography } from "antd";
import dayjs from 'dayjs';
import websiteConfig from '@/config/website';

import { getBlog } from './store/action';

import '@toast-ui/editor/dist/toastui-editor.css';
// import 'Assets/styles/markdown.css';
import styles from './show.module.scss';

const { Title, Paragraph } = Typography;

const BlogShow = props => {

    const { current } = props;
    const { fetchBlog } = props;
    const { id } = useParams();
    const viewerRef = useRef(null);

    // ! 我只希望组件挂载的时候执行一次拉取方法，但再useEffect中申明[]依赖却引起了webpack编译的warning提示
    // ! 不声明[]时更离谱，会一直调用fetchBlog
    useEffect(() => {
        fetchBlog(id);
    }, [id, fetchBlog]);

    useEffect(() => {
        current && !(current.error) && viewerRef.current.getInstance().setMarkdown(current.content);
    }, [current]);

    const title = current ? current.error ? current.error : current.title : '加载中……';

    return (
        <>
            <Helmet>
                <title>{`${title} | ${websiteConfig.name}`}</title>
                <meta name="description" content={`${title} | ${websiteConfig.name}`} />
            </Helmet>
            <Typography className={styles['blog']}>

                {
                    current ?
                        current.error ?
                            <h1>{current.error}</h1> :
                            <>
                                <Title>{current.title}</Title>
                                <Paragraph>发布时间：{dayjs(current.createdAt).format('YYYY年MM月DD日 HH:mm:ss')}</Paragraph>
                                <Viewer
                                    ref={viewerRef}
                                    initialValue={current.content}
                                    previewStyle="vertical"
                                    height="auto"
                                    initialEditType="markdown"
                                    useCommandShortcut={true}
                                    hideModeSwitch={true}
                                    viewer={true}
                                />
                            </> :
                        <h1>加载中...</h1>
                }
            </Typography>
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    current: state.blog.list[ownProps.match.params.id],
});

const mapDispatchToProps = dispatch => ({
    fetchBlog(id) {
        dispatch(getBlog(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogShow);