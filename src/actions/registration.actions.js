import { store } from 'react-notifications-component';
import { registration } from '../services/auth.service';
import { alertActions } from './alert.actions';
import { USER_CONSTANTS } from '../constants';
import { authModalActions } from './authModal.actions';

const registrationAction = (user, t) => {
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
                dispatch(authModalActions.openLogin());
                store.addNotification({
                    message: t('auth.registrationSuccessful'),
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
                store.addNotification({
                    message: error.response.data.message,
                    type: 'danger',
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
        );
    };
};

export default registrationAction;
