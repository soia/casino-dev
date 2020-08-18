import { message } from 'antd';
import { USER_CONSTANTS, personalAreaPath, profileDataPath } from '../constants';
import { login } from '../services/auth.service';
import { alertActions } from '.';

const loginAction = (username, password, history) => {
    const request = user => ({ type: USER_CONSTANTS.LOGIN_REQUEST, user });
    const success = user => ({ type: USER_CONSTANTS.LOGIN_SUCCESS, user });
    const failure = error => ({ type: USER_CONSTANTS.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request({ username }));

        login(username, password, history).then(
            user => {
                dispatch(success(user));
                dispatch(alertActions.success('Authorization successful'));
                history.push(`${personalAreaPath}${profileDataPath}`);
                message.success('Authorization successful', 2);
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            },
        );
    };
};

export default loginAction;
