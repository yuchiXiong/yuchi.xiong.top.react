import request from '../request';

const create = (file, blogId, userToken) => {
    return request.post('/photo_uploads', {
        file: file,
        blogId: blogId
    }, {
        headers: {
            'User-Token': userToken
        }
    });
};

export {
    create
};