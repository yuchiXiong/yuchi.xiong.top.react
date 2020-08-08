import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { List, Typography, Divider, Pagination } from 'antd';
import dayjs from 'dayjs';

import styles from './index.module.scss';

const { Text, Title } = Typography;

const Archive = props => {

    const { data } = props;
    const history = useHistory();

    const handleClick = id => {
        history.push(`/blog/${id}`);
    };

    return (
        <>
            <Title level={3}>共记 {data.reduce((total, current) => total + current.blogs.length, 0)} 篇文章</Title>
            {data.map(item => {
                return (
                    <>
                        <Divider orientation="center">
                            <Title level={4}>{item.year}</Title>
                        </Divider>
                        <List
                            key={`archive-year-${item.year}`}
                            dataSource={item.blogs}
                            renderItem={item => (
                                <List.Item className={styles['archive-list']} onClick={() => handleClick(item.id)}>
                                    <Text className={styles.title}>{item.title}</Text>
                                    <Text>{dayjs(item.createdAt).format('MM-DD')}</Text>
                                </List.Item>
                            )}
                        />
                    </>
                );
            })}
            < Pagination className={styles['archive-pagination']} defaultCurrent={1} total={50} />
        </>
    );
};

const mapStateToProps = state => {
    return {
        data: state.archive
    };
};

export default connect(mapStateToProps, null)(Archive);