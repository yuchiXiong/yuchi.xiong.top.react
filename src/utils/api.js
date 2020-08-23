/*
    * 1. 所有请求均封装在此处
        组件实际调用的是actions方法，为避免重名此处的方法按路径命名
    * 2. restful API约定
        动作    方法        路径    
        index:  Get         /resources          apiVerResourcesAction
        show:   Get         /resources/:id
        update: Put/Patch   /resources/:id
        delete: Delete      /resources/:id

    ? 既然后端Model层按照某种约定形成restful API，为什么前端不可以
*/
import resources from './rails-resources';
import request from './request';

class Session {
    static create(account, password) {
        return request.post('/sessions', {
            account,
            password
        });
    }
}

const Blogs = resources('blogs');

export {
    Blogs,
    Session
};