import { Session } from '@/utils/api';
import { UPDATE_CURRENT_USER_STATE } from './constants';

const updateCurrentUserState = userInfo => ({
    type: UPDATE_CURRENT_USER_STATE,
    userInfo
});

const login = (account, password) => {
    return dispatch => {
        Session.create(account, password).then(res => {
            if (res.code === 0) {
                dispatch(updateCurrentUserState(res.data.user));
            } else {
                console.log('password or account not match');
            }
        });
    };
};

export {
    login
}; 