import React, { useState } from 'react';
import SimpleMDEEditor from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import styles from './new.module.scss';

const BlogNew = () => {

    const [input, setInput] = useState('');

    const getInsance = instance => {
        instance.toggleFullScreen();
        instance.toggleSideBySide();
    };

    return (
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
        />
    );
};

export default BlogNew;