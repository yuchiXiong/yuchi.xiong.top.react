import React from 'react';
import { Link } from 'react-router-dom';
import { List, Row, Col, Skeleton } from 'antd';
import { Viewer } from '@toast-ui/react-editor';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import styles from './index.module.scss';
// const IconText = ({ icon, text }) => (
//     <Space>
//         {React.createElement(icon)}
//         {text}
//     </Space>
// );

const BlogList = props => {

    const { list, total, loading } = props;
    const { togglePage } = props;

    return (
        loading ?
            <div style={{ background: '#fff', padding: '16px 24px', borderRadius: '10px' }}>
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
                <Skeleton loading={loading} active avatar paragraph title round={true} />
            </div> :
            <List
                className={styles['list']}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        togglePage(page);
                        window.scrollTo(0, 0);
                    },
                    hideOnSinglePage: true,
                    total: total.count,
                    current: total.current,
                    pageSize: 10,
                }}
                dataSource={list}
                renderItem={item => (
                    item.error ?
                        null :
                        <div className={styles['list']}>
                            <Link
                                key={`blog-home-list-item-${item.id}`}
                                to={`/blog/${item.id}`}>
                                <List.Item
                                    className={styles['list-item']}
                                // actions={[
                                //     <IconText icon={EyeOutlined} text="111" key="blog_home_list_visit" />,
                                //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                // ]}
                                >
                                    <List.Item.Meta
                                        title={item.title}
                                        description={
                                            <>
                                                {/* <Avatar src={'https://www.xiongyuchi.top/img/avatar.jpg'} /> */}
                                                <CalendarOutlined /> {dayjs(item.createdAt).format('发布于 YYYY年MM月')}
                                            </>
                                        }
                                    />
                                    <Row >
                                        <Col md={24} sm={0} xs={0}>
                                            <section className={styles['blog-content']}>
                                                <section className={styles['blog-info']}>
                                                    <Viewer
                                                        initialValue={item.content.substr(0, 100)}
                                                        initialEditType="markdown" />
                                                    {/* <Button type="link" className={styles["show-all-btn"]}>查看全文</Button> */}
                                                </section>
                                                {
                                                    Math.random() > 0.5 ?
                                                        <section>
                                                            <img
                                                                width={272}
                                                                alt="logo"
                                                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                                            />
                                                        </section> :
                                                        null
                                                }
                                            </section>
                                        </Col>
                                        <Col md={0} sm={24}>
                                            <section className={styles['blog-content']} style={{ flexDirection: 'column' }}>
                                                {
                                                    Math.random() > 0.5 ?
                                                        <section>
                                                            <img
                                                                width={'100%'}
                                                                style={{ marginBottom: '12px', borderRadius: '10px' }}
                                                                alt="logo"
                                                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                                            />
                                                        </section> :
                                                        null
                                                }
                                                <section className={styles['blog-info']}>
                                                    <Viewer
                                                        initialValue={item.content.substr(0, 100)}
                                                        initialEditType="markdown" />
                                                    {/* <Button type="link" className={styles["show-all-btn"]}>查看全文</Button> */}
                                                </section>
                                            </section>
                                        </Col>
                                    </Row>
                                </List.Item>
                            </Link>
                        </div>
                )}
            />
    );
};


export default BlogList;