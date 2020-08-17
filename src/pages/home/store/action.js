import { Blogs } from '@/utils/api';
import { UPDATE_LIST, UPDATE_ITEM } from './constants';

// * 拉取博客列表
const fetchBlogList = list => ({
    type: UPDATE_LIST,
    list
});

const getBlogs = page => {
    return dispatch => {
        return Blogs.index(page).then(res => {
            dispatch(fetchBlogList(res.data.blogs));
        });
    };
};

const fetchBlog = blog => ({
    type: UPDATE_ITEM,
    blog
});

const getBlog = id => {
    return dispatch => {
        return Blogs.show(id).then(res => {
            dispatch(fetchBlog(res.data.blog));
        });
    };
};

export {
    getBlogs,
    getBlog
};