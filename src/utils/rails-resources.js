/*
    * 这段令人疑惑的代码实现了一个简单的rails restful风格路由映射
        * example
        resources(model-name)
        =>
            class ModelName {
                static index(){
                    return request.get(`api/v1/${model-name}`);
                }
                ...
            }
*/
import request from './request';

const resources = model => {
    return class Model {
        static index(page) {
            return request.get(`/${model}`, {
                params: {
                    page
                }
            });
        }

        static show(id) {
            return request.get(`/${model}/${id}`);
        }

        static create(params, headers) {
            return request.post(`/${model}`, {
                ...params
            }, {
                headers: {
                    ...headers
                }
            });
        }

        static update(id, params, headers) {
            return request.put(`/${model}/${id}`, {
                ...params
            }, {
                headers: {
                    ...headers
                }
            });
        }

        static delete(id, headers) {
            return request.delete(`/${model}/${id}`, {
                headers: {
                    ...headers
                }
            });
        }
    };
};

export default resources;