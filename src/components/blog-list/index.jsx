import React from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'antd';
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

    const { list, total } = props;
    const { togglePage } = props;

    return (
        <List
            // loading={true}
            className={styles['list']}
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    togglePage(page);
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
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
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
                            <Viewer
                                initialValue={item.content.substr(0, 200)}
                                initialEditType="markdown" />
                            <Button type="link" className={styles["show-all-btn"]}>查看全文</Button>
                        </List.Item>
                    </Link>

            )}
        />
    );
};


export default BlogList;