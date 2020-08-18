import { UPDATE_LIST, UPDATE_ITEM } from './constants';

const defaultState = {
    // hots: [
    //     {
    //         id: 1,
    //         title: '快速搭建自己的个人博客！Hexo入门指南',
    //         description: '手把手教你使用Hexo搭建一个自己的博客',
    //         createdAt: '2020-07-28 19:10:47',
    //         tags: ['个人博客', 'Hexo', 'CMS'],
    //         image: null
    //     },
    //     {
    //         id: 2,
    //         title: 'React同构渲染，手把手教你搭建自己的SSR框架',
    //         description: 'React + NodeJS同构渲染，体验和SEO我都要!',
    //         createdAt: '2020-07-28 19:10:47',
    //         tags: ['React', 'SSR', 'Node'],
    //         image: null
    //     },
    //     {
    //         id: 3,
    //         title: 'Rails开发Guide，Rails一年经验总结',
    //         description: '一转眼入坑Rails一年了，分享一点自己的心得',
    //         createdAt: '2020-07-28 19:10:47',
    //         tags: ['Rails', '全栈', 'Web'],
    //         image: null
    //     }
    // ],
    list: []
};

// ! 关于index动作与show动作的一点思考：
//   index拉取列表时只拉取mate信息
//   show拉取想起时只拉取详情信息
//   拉取完成后将数据合并到store里，下一次进入可以使用缓存
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_LIST:
            return {
                ...state,
                list: action.list
            };
        case UPDATE_ITEM:
            let current = state.list.filter(item => parseInt(item.id) === action.blog.id)[0];
            if (current) {
                state.list[state.list.indexOf(current)] = action.blog;
            } else {
                state.list.push(action.blog);
            }
            return {
                ...state,
                list: state.list
            };
        default:
            return state;
    }
};

export default reducer;