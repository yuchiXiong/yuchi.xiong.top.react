import request from '../request';

const create = (account, password) => {
    return request.post('/sessions', {
        account,
        password
    });
};

export {
    create
};