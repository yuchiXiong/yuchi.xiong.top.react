import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SimpleMDEEditor from 'react-simplemde-editor';


import 'easymde/dist/easymde.min.css';
import styles from './new.module.scss';

const BlogNew = props => {

    const { userInfo } = props;
    const [input, setInput] = useState('');

    const getInsance = instance => {
        instance.toggleFullScreen();
        instance.toggleSideBySide();
    };

    return (
        <>
            {
                (userInfo || JSON.parse(localStorage.getItem('user'))) ?
                    <SimpleMDEEditor
                        id="blog-editor"
                        className={styles.editor}
                        getMdeInstance={getInsance}
                        label="现在发布你的博客"
                        onChange={e => setInput(e)}
                        value={input}
                        options={{
                            autofocus: true,
                            spellChecker: false
                        }}
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