import { UPDATE_CURRENT_USER_STATE } from './constants';

const defaultState = {
    userInfo: null
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER_STATE:
            const userInfo = action.userInfo;
            console.log(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo));
            return {
                ...state,
                userInfo
            };
        default:
            return state;
    }
};

export default reducer;