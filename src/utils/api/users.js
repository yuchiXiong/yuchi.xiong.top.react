import request from '@/utils/request';

const userBlogs = id => {
    return request.get(`/users/${id}/blogs`);
};

export {
    userBlogs
};