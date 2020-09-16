import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Collapse, List, Typography } from 'antd';
import dayjs from 'dayjs';
import websiteConfig from '@/config/website';

const { Panel } = Collapse;
const { Text } = Typography;

const Category = props => {

    const { data } = props;

    const callback = key => {
    };

    return (
        <>
            <Helmet>
                <title>{`分类 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`分类 | ${websiteConfig.name}`} />
            </Helmet>
            {
                data.map(item => {
                    return (
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header={item.category} key={item.category}>
                                <List
                                    // header={<div>Header</div>}
                                    // footer={<div>Footer</div>}
                                    // bordered
                                    dataSource={item.blogs}
                                    renderItem={blog => (
                                        <List.Item>
                                            <Text >{blog.title}</Text>
                                            <Text>{dayjs(blog.createdAt).format('MM-DD')}</Text>
                                        </List.Item>
                                    )}
                                />
                            </Panel>
                        </Collapse>
                    );
                })
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        data: state.category
    };
};

export default connect(mapStateToProps, null)(Category);