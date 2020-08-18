import { message } from 'antd';
import { registration } from '../services/auth.service';
import { alertActions } from './alert.actions';
import { USER_CONSTANTS } from '../constants';

const registrationAction = user => {
    const request = payload => ({
        type: USER_CONSTANTS.REGISTER_REQUEST,
        payload,
    });

    const success = payload => ({
        type: USER_CONSTANTS.REGISTER_SUCCESS,
        payload,
    });

    const failure = error => ({
        type: USER_CONSTANTS.REGISTER_FAILURE,
        error,
    });

    return dispatch => {
        dispatch(request());

        registration(user).then(
            response => {
                dispatch(success(response));
                dispatch(alertActions.success('Registration successful'));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
                message.error('Username or email already exist', 2);
            },
        );
    };
};

export default registrationAction;
