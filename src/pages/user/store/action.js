import { Session } from '@/utils/api';
import { UPDATE_CURRENT_USER_STATE } from './constants';
import ReturnCode from '@/utils/return-code';

const updateCurrentUserState = userInfo => ({
    type: UPDATE_CURRENT_USER_STATE,
    userInfo
});

const login = (account, password) => {
    return dispatch => {
        Session.create(account, password).then(res => {
            if (res.code === ReturnCode.Success) {
                dispatch(updateCurrentUserState(res.data.user));
            } else {
                // message.error('account or password not match!');
            }
        });
    };
};

export {
    login
}; 