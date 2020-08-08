import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { TagCloud } from 'react-tagcloud';
import websiteConfig from '@/config/website';


import styles from './index.module.scss';

const Tag = props => {

    const { data } = props;

    return (
        <>
            <Helmet>
                <title>{`标签 | ${websiteConfig.name}`}</title>
                <meta name="description" content={`标签 | ${websiteConfig.name}`} />
            </Helmet>
            <TagCloud
                className={styles.tag}
                minSize={12}
                maxSize={48}
                tags={data}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
            />
        </>
    );
};

const mapStateToProps = state => {
    return {
        data: state.tag
    };
};

export default connect(mapStateToProps, null)(Tag);