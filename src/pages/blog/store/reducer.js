import {
    ON_LOADING,
    UPDATE_LIST,
    UPDATE_ITEM,
    ADD_ITEM
} from './constants';

const defaultState = {
    loading: true,
    hots: [],
    list: {},
    total: {
        count: 0,
        current: 1
    }
};

// ! 关于index动作与show动作的一点思考：
//   index拉取列表时只拉取mate信息
//   show拉取想起时只拉取详情信息
//   拉取完成后将数据合并到store里，下一次进入可以使用缓存
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ON_LOADING:
            return {
                ...state,
                loading: action.flag
            };
        case UPDATE_LIST:
            // * 在store中存入一个将blog.id作为key的对象
            // * 方便查找对应的对象
            let list = {};
            action.list.map(item => list[item.id] = item);
            return {
                ...state,
                list: list,
                total: action.total
            };
        case UPDATE_ITEM:
            state.list[action.blog.id] = action.blog;
            return {
                ...state,
                list: {
                    ...state.list
                }
            };
        case ADD_ITEM:
            return {
                ...state,
                list: state.list.concat(action.blog)
            };
        default:
            return state;
    }
};

export default reducer;