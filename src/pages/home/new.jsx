import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
// import styles from './new.module.scss';

const BlogNew = props => {

    const { userInfo } = props;
    const [input, setInput] = useState('');
    const mdEle = useRef(null);

    return (
        <>
            {
                (userInfo || JSON.parse(localStorage.getItem('user'))) ?
                    <Editor
                        ref={mdEle}
                        initialValue={input}
                        onChange={() => setInput(mdEle.current.value)}
                        previewStyle="vertical"
                        height="100%"
                        initialEditType="markdown"
                        useCommandShortcut={true}
                    /> :
                    <Redirect to='/login' />
            }

        </>
    );
};

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
});

export default connect(mapStateToProps)(BlogNew);