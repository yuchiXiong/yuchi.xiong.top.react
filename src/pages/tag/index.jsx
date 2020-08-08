import React from 'react';
import { connect } from 'react-redux';
import { TagCloud } from 'react-tagcloud';

import styles from './index.module.scss';

const Tag = props => {

    const { data } = props;

    return (
        <TagCloud
        className={styles.tag}
            minSize={12}
            maxSize={48}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
    );
};

const mapStateToProps = state => {
    return {
        data: state.tag
    };
};

export default connect(mapStateToProps, null)(Tag);