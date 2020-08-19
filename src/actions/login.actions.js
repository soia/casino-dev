import { store } from 'react-notifications-component';
import { USER_CONSTANTS, personalAreaPath, profileDataPath } from '../constants';
import { login } from '../services/auth.service';
import { alertActions } from '.';
import { authModalActions } from './authModal.actions';

const loginAction = (email, password, history, t) => {
    const request = user => ({ type: USER_CONSTANTS.LOGIN_REQUEST, user });
    const success = user => ({ type: USER_CONSTANTS.LOGIN_SUCCESS, user });
    const failure = error => ({ type: USER_CONSTANTS.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request({ email }));

        login(email, password, history).then(
            user => {
                dispatch(success(user));
                dispatch(alertActions.success('Authorization successful'));
                dispatch(authModalActions.closeModal());
                history.push(`${personalAreaPath}${profileDataPath}`);
                store.addNotification({
                    message: t('auth.authorizationSuccessful'),
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animated', 'slideInRight'],
                    animationOut: ['animated', 'zoomOut'],
                    dismiss: {
                        duration: 3000,
                        pauseOnHover: true,
                    },
                });
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            },
        );
    };
};

export default loginAction;
