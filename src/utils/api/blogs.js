import request from '../request';

const index = page => {
    return request.get(`/blogs`, {
        params: {
            page
        }
    });
};

const show = id => {
    return request.get(`/blogs/${id}`);
};

const create = (params, userToken) => {
    return request.post(`/blogs`, {
        ...params
    }, {
        headers: {
            'User-Token': userToken
        }
    });
};

const update = (id, params, userToken) => {
    return request.put(`/blogs/${id}`, {
        ...params
    }, {
        headers: {
            'User-Token': userToken
        }
    });
};

const destory = (id, userToken) => {
    return request.delete(`/blogs/${id}`, {
        headers: {
            'User-Token': userToken
        }
    });
};

export {
    index,
    show,
    create,
    update,
    destory
}